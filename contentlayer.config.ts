import {
  defineNestedType,
  defineDocumentType,
  FieldDefs,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
//import rehypePrettyCode from "rehype-pretty-code";
//import rehypeExternalLinks from 'rehype-external-links';
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import rehypeCodeWrap from "./src/libs/rehypeCodeWrap";

// const rehypePrettyCodeOptions = {
//   theme: "one-dark-pro",
//   keepBackground: true,
//   onVisitLine(node) {
//     if (node.children.length === 0) {
//       node.children = [{ type: "text", value: " " }];
//     }
//   },
//   onVisitHighlightedLine(node) {
//     node.properties.className.push("highlighted");
//   },
//   onVisitHighlightedWord(node) {
//     node.properties.className = ["word"];
//   },
// };

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string", required: true },
  },
}));

const fields: FieldDefs = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  date: { type: "date", required: true },
  tags: { type: "list", required: true, of: { type: "string" } },
  draft: { type: "boolean" },
  image: { type: "string" },
  icon: { type: "string" },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    readingMinutes: {
      type: "string",
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
    wordCount: {
      type: "number",
      resolve: (post) => post.body.raw.split(/\s+/gu).length,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeWrap,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            ariaLabel: "anchor",
          },
        },
      ],
      //[rehypePrettyCode, rehypePrettyCodeOptions],
      // [
      //   rehypeExternalLinks,
      //   {
      //     target: '_blank',
      //     rel: ['noopener noreferrer'],
      //   },
      // ],
    ],
  },
});
