import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkMath from 'remark-math';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

import { getAllPostsPath, getPostData } from '@/lib/get-posts-data';

import NextOptimizedImage from '@/components/NextOptimizedImage';
import HoverableLink from '@/components/HoverableLink';
import Tag from '@/components/Tag';
import PageTitle from '@/components/PageTitle';

const c1 = '#071013',
  c2 = '#fffecb',
  c3 = '#20a4f3',
  c4 = '#1d2b35',
  c5 = '#fb232e',
  c6 = '#ffaa33';

const h1_color = c4,
  h1_text_decoration = c4 + '80',
  h2_color = c4,
  h3_color = c4;
const p_color = c1 + 'f2',
  ul_color = c1 + 'e6',
  ol_color = c1 + 'e6';
const em_background = c1 + '26',
  em_color = c1 + 'f2';
const strong_background = c5 + '26',
  strong_color = c4 + 'f2';
const hr_color = c1 + '80',
  blockquote_background_color = c3 + '26',
  blockquote_border = c3 + 'e6';

function getHeadingAnchorProps(props) {
  let id = '';
  let modifiedProps = {};
  if (typeof props.children === 'string')
    modifiedProps['children'] = [props.children];
  else modifiedProps['children'] = props.children;

  let split_array =
    modifiedProps.children[modifiedProps.children.length - 1].split(':=:');
  if (split_array.length > 1) {
    id = split_array[1];
    modifiedProps.children[modifiedProps.children.length - 1] = split_array[0];
  }

  return [modifiedProps, id];
}

/** @type {import("rehype-pretty-code").Options} */
export const rehypePrettyCodeOptions = {
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

export default function Blog({ postMetadata, postContent }) {
  const { title, tags, images } = postMetadata;
  //console.log('postMetadata', postMetadata);
  return (
    <>
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pt-15 pt-10 dark:border-gray-700 text-center">
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div>
                  <PageTitle tagsKey={tags}>{title}</PageTitle>
                </div>

                <div>
                  {tags?.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            </div>
          </header>
          <MDXRemote {...postContent} components={{}} />
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [remarkFrontmatter, remarkMath, remarkGfm],
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
      id: params.id,
    },
  };
}
