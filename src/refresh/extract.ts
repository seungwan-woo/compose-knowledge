import { parse } from 'parse5';

interface Node { nodeName: string; value?: string; attrs?: { name: string; value: string }[]; childNodes?: Node[]; }
export interface Extracted { anchor: string; title: string; text: string; }
const attr = (n: Node, name: string) => n.attrs?.find(a => a.name === name)?.value;
const excluded = new Set(['script', 'style', 'nav', 'aside', 'footer', 'header', 'button', 'devsite-book-nav']);
const normalize = (s: string) => s.replace(/\s+/g, ' ').trim();
const content = (n: Node): string => excluded.has(n.nodeName) ? '' : n.nodeName === '#text' ? (n.value ?? '') : (n.childNodes ?? []).map(content).join('');
const slug = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';

const findById = (n: Node, id: string): boolean => attr(n, 'id') === id || (n.childNodes ?? []).some(c => findById(c, id));

/** Extract only the Android documentation article, using actual heading anchors. */
export function extractArticle(html: string): Extracted[] {
  const root = parse(html) as unknown as Node;
  const find = (n: Node): Node | undefined => ((attr(n, 'class') ?? '').split(/\s+/).includes('devsite-article-body') ? n : undefined) ?? n.childNodes?.map(find).find(Boolean);
  const article = find(root);
  if (!article) throw new Error('Missing devsite article body');
  const groups: Extracted[] = [];
  const topAnchor = attr(article, 'id') ?? (findById(root, 'main-content') ? 'main-content' : undefined);
  let current: Extracted | undefined = topAnchor ? { anchor: topAnchor, title: 'Introduction', text: '' } : undefined;
  if (current) groups.push(current);
  const visit = (n: Node) => {
    if (excluded.has(n.nodeName)) return;
    if (n.nodeName === '#text') {
      const t = normalize(n.value ?? '');
      if (t && current) current.text += `${current.text ? '\n\n' : ''}${t}`;
      return;
    }
    if (/^h[1-6]$/.test(n.nodeName)) {
      const title = normalize(content(n));
      const anchor = attr(n, 'id');
      if (title && anchor) { current = { anchor, title, text: '' }; groups.push(current); }
      return;
    }
    if (['p', 'pre', 'li', 'table', 'blockquote'].includes(n.nodeName)) {
      const t = n.nodeName === 'pre' ? content(n).replace(/\r\n?/g, '\n').trim() : normalize(content(n));
      if (t && current) current.text += `${current.text ? '\n\n' : ''}${t}`;
      return;
    }
    for (const c of n.childNodes ?? []) visit(c);
  };
  visit(article);
  const result = groups.filter(g => g.text.length > 0);
  if (!result.length) throw new Error('Empty devsite article body');
  return result;
}

export function safeId(value: string): string { return slug(value); }

/** Keep snippets small enough for the consumer's 3 KB read budget. */
export function chunks(text: string, limit = 2200): string[] {
  const result: string[] = [];
  let rest = text.trim();
  while (rest.length > limit) {
    let cut = rest.lastIndexOf(' ', limit);
    if (cut < limit / 2) cut = limit;
    result.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest) result.push(rest);
  return result;
}
