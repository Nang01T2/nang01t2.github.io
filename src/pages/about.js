// import { MDXLayoutRenderer } from '@/components/MDXComponents';
// import { getFileBySlug } from '@/lib/mdx';

// const DEFAULT_LAYOUT = 'DefaultLayout';

// export async function getStaticProps() {
//   const authorDetails = await getFileBySlug('misc', 'about');
//   return { props: { authorDetails } };
// }

export default function About({ authorDetails }) {
  return 'ABOUT';
  // const { mdxSource, frontMatter } = authorDetails;

  // return (
  //   <MDXLayoutRenderer
  //     //layout={frontMatter.layout || DEFAULT_LAYOUT}
  //     mdxSource={mdxSource}
  //     frontMatter={frontMatter}
  //   />
  // );
}
