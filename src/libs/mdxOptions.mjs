import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
//import remarkMdxCodeMeta from "remark-mdx-code-meta";

import remarkAdmonitions from './remarks/remarkAdmonitions';
//import remarkCodeTitles from "./remark/remarkCodeTitles.mjs";
import remarkImgToJsx from './remarks/remarkImgToJsx.mjs';

import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkDirective from 'remark-directive';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

const mdxOptions = {
  remarkPlugins: [
    remarkFrontmatter,
    remarkGfm,
    remarkBreaks,
    //remarkMdxCodeMeta,
    remarkDirective,
    remarkAdmonitions,
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
          className: ['anchor'],
          ariaLabel: 'anchor',
        },
      },
    ],
    [rehypePrettyCode, rehypePrettyCodeOptions],
  ],
};

export default mdxOptions;
