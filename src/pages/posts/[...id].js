import { serialize } from 'next-mdx-remote/serialize';
import { MDXLayoutRenderer } from '@/components/MDXComponents';

import { formatSlug, getFiles, getPostDataById } from '@/lib/get-posts-data';

import remarkMath from 'remark-math';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkTocHeadings from '@/lib/remark-toc-headings';

import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
  theme: 'one-dark-pro',
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

export async function getStaticPaths() {
  const blogFiles = getFiles('blog');
  const paths = blogFiles.map((p) => {
    console.log('file: ', formatSlug(p).split('/'));
    return {
      params: {
        id: formatSlug(p).split('/'),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  ///console.log('getStaticProps: ', params);
  const postData = await getPostDataById('blog', params?.id.join('/'));
  console.log('postData - metadata', postData?.metadata);
  let toc = [];
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [
        remarkFrontmatter,
        remarkMath,
        remarkGfm,
        [remarkTocHeadings, { exportRef: toc }],
      ],
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
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      toc,
      id: params.id,
    },
  };
}

export default function PostDetail({ postMetadata, postContent, toc }) {
  console.log('TOC', toc);
  console.log('postMetadata', postMetadata);
  return (
    <div>
      <MDXLayoutRenderer
        //layout={frontMatter.layout || DEFAULT_LAYOUT}
        toc={toc}
        mdxSource={postContent}
        //frontMatter={frontMatter}
        //authorDetails={authorDetails}
        //prev={prev}
        //next={next}
      />
    </div>
  );
}
