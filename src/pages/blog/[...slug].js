import React from 'react';
import PageTitle from '@/components/PageTitle';
import { MDXLayoutRenderer } from '@/components/MDXComponents';
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/mdx';

const DEFAULT_LAYOUT = 'BlogLayout';

export async function getStaticPaths() {
  const posts = getFiles('blog');
  const results = {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  };
  console.log('Paths', results);
  return results;
}

export async function getStaticProps({ params }) {
  console.log('params XX', params);
  return { props: { post: {}, authorDetails: {}, prev: {}, next: {} } };
  const allPosts = await getAllFilesFrontMatter('blog');
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join('/')
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug('blog', params.slug.join('/'));
  const authorList = post.frontMatter.authors || ['default'];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  // rss
  // if (allPosts.length > 0) {
  //   const rss = generateRss(allPosts)
  //   fs.writeFileSync('./public/feed.xml', rss)
  // }

  return { props: { post, authorDetails, prev, next } };
}

export default function BlogDetail({ post, authorDetails, prev, next }) {
  //const { mdxSource, toc, frontMatter } = post;
  return (
    <div className="mt-24 text-center">
      <PageTitle>
        Under Construction{' '}
        <span role="img" aria-label="roadwork sign">
          🚧
        </span>
      </PageTitle>
    </div>
  );

  return (
    <>
      {frontMatter?.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
}
