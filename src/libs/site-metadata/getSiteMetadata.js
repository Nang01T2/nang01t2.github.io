import { JsonCache } from "@/libs/utils/json-cache";
import { JSDOM } from "jsdom";

const isDev = process.env.NODE_ENV === "development";
const cacheStore = isDev ? new JsonCache("./site-metadata.cache.json") : null;

export async function getSiteMetadata(url) {
  if (isDev) {
    const cache = cacheStore.get(url);
    if (cache) return cache;
  }

  console.debug("fetching siteMetadata for", url);
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(
      `Failed to fetch ${url}. Status: ${
        resp.status
      }. Body: ${await resp.text()}`
    );
  }
  const htmlStr = await resp.text();
  const dom = new JSDOM(htmlStr);
  const meta = dom.window.document.querySelectorAll("head > meta");

  const description = dom.window.document
    .querySelector("meta[name=description]")
    ?.getAttribute("content");

  const ogp = Array.from(meta)
    .filter(
      (element) =>
        element.hasAttribute("property") &&
        element.getAttribute("property").startsWith("og:")
    )
    .reduce((acc, ogp) => {
      const property = ogp.getAttribute("property").trim().replace("og:", "");
      const content = ogp.getAttribute("content");
      return {
        ...acc,
        [property]: content,
      };
    }, {});

  const metadata = {
    ogp,
    title: dom.window.document.title,
    description,
    url,
  };
  if (isDev) {
    cacheStore.set(url, metadata);
  }
  return metadata;
}
