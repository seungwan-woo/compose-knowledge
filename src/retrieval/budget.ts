import type { ReadResponse, SearchResponse } from '../domain/types.js';

export function serializeBounded(value: SearchResponse | ReadResponse, maxBytes: number): string {
  if (!Number.isSafeInteger(maxBytes) || maxBytes < 1) throw new Error('Invalid byte budget');
  const copy: SearchResponse | ReadResponse = structuredClone(value);
  const encode = () => JSON.stringify(copy) + '\n';
  const fits = () => Buffer.byteLength(encode(), 'utf8') <= maxBytes;
  if (fits()) return encode();
  copy.truncated = true;
  const trim = (get: () => string, set: (v: string) => void) => {
    const chars = Array.from(get());
    set('');
    if (!fits()) return;
    let low = 0, high = chars.length;
    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      set(chars.slice(0, mid).join(''));
      if (fits()) low = mid; else high = mid - 1;
    }
    set(chars.slice(0, low).join(''));
  };
  if ('body' in copy) {
    trim(() => copy.body, v => { copy.body = v; });
  } else {
    const originals = copy.hits.map(hit => Array.from(hit.snippet));
    for (const hit of copy.hits) hit.snippet = '';
    while (!fits() && copy.hits.length) copy.hits.pop();
    if (fits()) {
      let low = 0, high = Math.max(0, ...originals.map(chars => chars.length));
      const apply = (length: number) => copy.hits.forEach((hit, i) => { hit.snippet = originals[i]!.slice(0, length).join(''); });
      while (low < high) {
        const mid = Math.ceil((low + high) / 2);
        apply(mid);
        if (fits()) low = mid; else high = mid - 1;
      }
      apply(low);
    }
  }
  if (!fits()) throw new Error('Byte budget cannot fit mandatory response metadata');
  return encode();
}
