import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const allowed = new Set(['developer.android.com', 'm3.material.io', 'android.googlesource.com', 'api.github.com', 'raw.githubusercontent.com']);
export interface HttpResponse { status: number; headers: Record<string, string>; body: string; }
type Request = (url: string) => Promise<HttpResponse>;
function trusted(url: string): URL {
  const parsed = new URL(url);
  if (parsed.protocol !== 'https:' || !allowed.has(parsed.hostname) || parsed.username || parsed.password || (parsed.port && parsed.port !== '443')) throw new Error(`Untrusted source URL: ${url}`);
  return parsed;
}
const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));
/** Follow only validated HTTPS redirects; retry only transient responses and transport errors. */
export async function fetchWithPolicy(url: string, request: Request, wait: (ms: number) => Promise<void> = sleep): Promise<string> {
  let current = trusted(url).href;
  for (let redirects = 0; redirects <= 5; redirects++) {
    let response: HttpResponse | undefined;
    for (let attempt = 0; attempt < 6; attempt++) {
      try { response = await request(current); }
      catch (error) {
        if (attempt === 5) throw new Error(`Failed fetching ${current}: ${String(error)}`);
        await wait(2000 * 2 ** attempt); continue;
      }
      if (response.status === 429 || response.status >= 500 && response.status <= 599) {
        if (attempt === 5) throw new Error(`HTTP ${response.status} fetching ${current}`);
        const retry = response.headers['retry-after'];
        const seconds = retry && /^\d+$/.test(retry) ? Number(retry) * 1000 : retry ? Date.parse(retry) - Date.now() : 0;
        // Abort instead of violating a server-requested wait that exceeds this run's budget.
        if (seconds > 300_000) throw new Error(`Retry-After exceeds refresh budget for ${current}`);
        await wait(Math.max(2000 * 2 ** attempt, Number.isFinite(seconds) ? seconds : 0));
        continue;
      }
      break;
    }
    if (!response) throw new Error(`Failed fetching ${current}`);
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      if (!response.headers.location || redirects === 5) throw new Error(`Invalid redirect from ${current}`);
      current = trusted(new URL(response.headers.location, current).href).href;
      continue;
    }
    if (response.status < 200 || response.status >= 300) throw new Error(`HTTP ${response.status} fetching ${current}`);
    return response.body;
  }
  throw new Error('Too many redirects');
}
let nextGitilesRequestAt = 0;
async function curlRequest(url: string): Promise<HttpResponse> {
  if (new URL(url).hostname === 'android.googlesource.com') {
    // Reserve a slot before awaiting so concurrent callers cannot form a burst.
    const slot = Math.max(Date.now(), nextGitilesRequestAt);
    nextGitilesRequestAt = slot + 1000;
    const delay = slot - Date.now();
    if (delay > 0) await sleep(delay);
  }
  const { stdout } = await exec('curl', ['--disable', '--silent', '--show-error', '--include', '--suppress-connect-headers', '--proto', '=https', '--max-time', '45', '--max-filesize', '12000000', '--user-agent', 'compose-knowledge-refresh', url], { maxBuffer: 12_100_000, timeout: 50_000, encoding: 'utf8' });
  const split = stdout.indexOf('\r\n\r\n');
  if (split < 0) throw new Error('Invalid HTTP response');
  const [statusLine, ...lines] = stdout.slice(0, split).split('\r\n');
  const status = Number(statusLine?.match(/^HTTP\/\S+\s+(\d{3})/)?.[1]);
  if (!status) throw new Error('Invalid HTTP status');
  const headers: Record<string, string> = {};
  for (const line of lines) { const colon = line.indexOf(':'); if (colon > 0) headers[line.slice(0, colon).toLowerCase()] = line.slice(colon + 1).trim(); }
  return { status, headers, body: stdout.slice(split + 4) };
}
export const fetchPublicText = (url: string): Promise<string> => fetchWithPolicy(url, curlRequest);
