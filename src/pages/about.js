import { MDXLayoutRenderer } from '@/components/MDXComponents';
import { getFileBySlug } from '@/libs/mdx';

const DEFAULT_LAYOUT = 'DefaultLayout';

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('misc', 'about');
  return { props: { authorDetails } };
}

export default function About({ authorDetails }) {
  //return 'ABOUT';

  return (
    <MDXLayoutRenderer
      //layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={authorDetails?.content}
      frontMatter={authorDetails?.frontMatter}
    />
  );
}
