// contentlayer.config.ts
import {
  defineNestedType,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";

// src/libs/getToc.ts
import { remark } from "remark";
import remarkMdx from "remark-mdx";

// src/libs/remarks/remarkTocHeadings.ts
import { slug } from "github-slugger";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
function remarkTocHeadings(options) {
  return (tree) => visit(tree, "heading", (node) => {
    const textContent = toString(node);
    options.exportRef.push({
      value: textContent,
      url: "#" + slug(textContent),
      depth: node.depth
    });
  });
}

// src/libs/getToc.ts
async function getToc(markdown) {
  const toc = [];
  remark().use(remarkMdx).use(remarkTocHeadings, { exportRef: toc }).processSync(markdown);
  return toc;
}

// contentlayer.config.ts
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

// src/libs/rehypeCodeWrap.js
import { visit as visit2 } from "unist-util-visit";
function rehypeCodeWrap() {
  return (tree) => {
    visit2(tree, { tagName: "pre" }, (node, index) => {
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
    },
    toc: {
      type: "list",
      resolve: (post) => getToc(post.body.raw)
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
      ],
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener noreferrer"]
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CWR6QJJN.mjs.map
