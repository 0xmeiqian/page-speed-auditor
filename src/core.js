import fetch from 'node-fetch';

export async function audit(url) {
  const t0 = Date.now();
  const res = await fetch(url, {redirect: 'follow'});
  const text = await res.text();
  const t1 = Date.now();
  const bytes = Buffer.byteLength(text, 'utf8');
  const requests = 1 + (text.match(/<(script|img|link)\b/gi) || []).length;
  const suggestions = [];
  if (bytes > 500_000) suggestions.push('Consider compressing and splitting large assets.');
  if ((text.match(/<script\b/gi) || []).length > 5) suggestions.push('Reduce number of script tags or defer non-critical JS.');
  if (!/rel=\"preload\"/.test(text) && /<link\b/.test(text)) suggestions.push('Preload critical CSS or fonts.');
  return {
    url,
    status: res.status,
    timing: { total: t1 - t0 },
    bytes,
    requests,
    suggestions,
    fetchedAt: new Date(t1).toISOString(),
  };
}
