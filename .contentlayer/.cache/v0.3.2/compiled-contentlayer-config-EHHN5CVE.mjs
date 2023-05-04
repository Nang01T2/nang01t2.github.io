// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";

// src/libs/mdxOptions.mjs
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";

// src/libs/remarks/remarkImgToJsx.mjs
import fs from "fs";
import sizeOf from "image-size";
import { visit } from "unist-util-visit";

// src/libs/mdxOptions.mjs
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkDirective from "remark-directive";
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
  remarkPlugins: [
    remarkFrontmatter,
    remarkGfm,
    remarkBreaks,
    //remarkMdxCodeMeta,
    remarkDirective
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
        properties: {
          className: ["anchor"],
          ariaLabel: "anchor"
        }
      }
    ],
    [rehypePrettyCode, rehypePrettyCodeOptions]
  ]
};
var mdxOptions_default = mdxOptions;

// src/libs/getToc.ts
import { remark } from "remark";
import remarkMdx from "remark-mdx";

// src/libs/remarks/remarkTocHeadings.ts
import { slug } from "github-slugger";
import { toString } from "mdast-util-to-string";
import { visit as visit2 } from "unist-util-visit";
function remarkTocHeadings(options) {
  return (tree) => visit2(tree, "heading", (node) => {
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
var fields = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  date: { type: "date", required: true },
  tags: { type: "list", required: true, of: { type: "string" } },
  draft: { type: "boolean" },
  image: { type: "string" },
  icon: { type: "string" }
};
function resolveSlug(raw) {
  const [, locale, ...rest] = raw.flattenedPath.split("/");
  return { locale, slug: rest.join("/") };
}
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*+(.md|.mdx)`,
  contentType: "mdx",
  fields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${resolveSlug(post._raw).slug}`
    },
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    locale: {
      type: "enum",
      options: ["en", "vi"],
      resolve: (post) => resolveSlug(post._raw).locale
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
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: mdxOptions_default.remarkPlugins,
    rehypePlugins: mdxOptions_default.remarkPlugins
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-EHHN5CVE.mjs.map
