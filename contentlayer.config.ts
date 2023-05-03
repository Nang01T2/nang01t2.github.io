import {
  defineNestedType,
  defineDocumentType,
  FieldDefs,
  makeSource,
  RawDocumentData,
} from "contentlayer/source-files";

import mdxOptions from "./src/libs/mdxOptions.mjs";

import { getToc } from "./src/libs/getToc";
import readingTime from "reading-time";

const fields: FieldDefs = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  date: { type: "date", required: true },
  tags: { type: "list", required: true, of: { type: "string" } },
  draft: { type: "boolean" },
  image: { type: "string" },
  icon: { type: "string" },
};

function resolveSlug(raw: RawDocumentData) {
  const [, locale, ...rest] = raw.flattenedPath.split("/");
  return { locale, slug: rest.join("/") };
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*+(.md|.mdx)`,
  contentType: "mdx",
  fields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${resolveSlug(post._raw).slug}`,
    },
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    locale: {
      type: "enum",
      options: ["en", "vi"],
      resolve: (post) => resolveSlug(post._raw).locale,
    },
    readingMinutes: {
      type: "string",
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
    wordCount: {
      type: "number",
      resolve: (post) => post.body.raw.split(/\s+/gu).length,
    },
    toc: {
      type: "list",
      resolve: (post) => getToc(post.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: mdxOptions.remarkPlugins,
    rehypePlugins: mdxOptions.remarkPlugins,
  },
});
