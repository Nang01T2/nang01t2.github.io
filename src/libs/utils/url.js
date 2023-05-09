export function extractDomain(url) {
  const domain = url?.match(/^https?:\/\/([^/]+)/);
  return domain ? domain[1] : url;
}
