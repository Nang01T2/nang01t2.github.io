/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import("rehype-pretty-code").Options} */
export const rehypePrettyCodeOptions = {
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
      // rehypeSlug,
      // [
      //   rehypeAutolinkHeadings,
      //   {
      //     properties: {
      //       className: [
      //         "anchor no-underline flex items-center before:-translate-x-[8px] before:-ml-[20px] before:bg-no-repeat before:bg-contain before:w-[20px] before:h-[20px] before:content-[''] hover:before:bg-[url('/link.svg')]",
      //       ],
      //     },
      //     behaviour: "wrap",
      //   },
      // ],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    unoptimized: true,
    //loader: "imgix",
    //path: "https://images.unsplash.com/",
  },
  basePath:
    process.env.DEPLOY_TARGET === "gh-pages" ? "/nang01t2.github.io" : "",
  assetPrefix:
    process.env.DEPLOY_TARGET === "gh-pages" ? "/nang01t2.github.io/" : "",
};

export default withMDX(nextConfig);
