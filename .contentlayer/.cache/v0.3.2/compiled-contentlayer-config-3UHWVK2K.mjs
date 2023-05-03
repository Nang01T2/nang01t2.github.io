// contentlayer.config.ts
import {
  defineNestedType,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

// src/libs/rehypeCodeWrap.js
import { visit } from "unist-util-visit";
function rehypeCodeWrap() {
  return (tree) => {
    visit(tree, { tagName: "pre" }, (node, index) => {
      if (!node.children || !node.children.length)
        return;
      const { properties } = node.children[0];
      if (!properties.className || !properties.className.length)
        return;
      const [lang, filename] = properties.className[0].split(":").map((e) => e.trim());
      if (filename) {
        properties.className = lang;
        node.properties.title = filename;
      }
      tree.children[index] = node;
    });
  };
}

// contentlayer.config.ts
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
            ariaLabel: "anchor"
          }
        }
      ]
      //[rehypePrettyCode, rehypePrettyCodeOptions],
      // [
      //   rehypeExternalLinks,
      //   {
      //     target: '_blank',
      //     rel: ['noopener noreferrer'],
      //   },
      // ],
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3UHWVK2K.mjs.map
