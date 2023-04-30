/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";

import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePresetMinify from "rehype-preset-minify";

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            ariaLabel: "anchor",
          },
        },
      ],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypePresetMinify,
    ],
  },
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  swcMinify: true,
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  images: {
    //  Configure `images.unoptimized = true` in `next.config.js` to disable the Image Optimization API.
    unoptimized: true,
    //loader: "imgix",
    //path: "https://images.unsplash.com/",
  },
  basePath:
    process.env.DEPLOY_TARGET === "gh-pages" ? "/nang01t2.github.io" : "",
  assetPrefix:
    process.env.DEPLOY_TARGET === "gh-pages" ? "/nang01t2.github.io/" : "",
};

//module.exports = nextConfig;
//export default withMDX(nextConfig);
export default withContentlayer(nextConfig);