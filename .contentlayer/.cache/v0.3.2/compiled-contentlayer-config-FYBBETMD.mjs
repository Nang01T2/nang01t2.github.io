// contentlayer.config.ts
import {
  defineNestedType,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";

// src/libs/mdxOptions.mjs
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
var rehypePrettyCodeOptions = {
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
  }
};
var mdxOptions = {
  providerImportSource: "@mdx-js/react",
  remarkPlugins: [
    remarkFrontmatter,
    remarkGfm,
    remarkBreaks
    //remarkMdxCodeMeta,
    //remarkDirective,
    //remarkAdmonitions,
    //remarkCodeTitles,
    //remarkImgToJsx,
  ],
  rehypePlugins: [
    rehypeExternalLinks,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        properties: {
          className: ["anchor"],
          ariaLabel: "anchor"
        }
        // properties: {
        //   class: "hash-link",
        // },
        // content() {
        //   return [linkIcon];
        // },
      }
    ],
    [rehypePrettyCode, rehypePrettyCodeOptions]
  ]
};
var mdxOptions_default = mdxOptions;

// contentlayer.config.ts
import readingTime from "reading-time";
var Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string", required: true }
  }
}));
var fields = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  date: { type: "date", required: true },
  tags: { type: "list", required: true, of: { type: "string" } },
  draft: { type: "boolean" },
  image: { type: "string" },
  icon: { type: "string" }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    readingMinutes: {
      type: "string",
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes)
    },
    wordCount: {
      type: "number",
      resolve: (post) => post.body.raw.split(/\s+/gu).length
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    ...mdxOptions_default
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-FYBBETMD.mjs.map
