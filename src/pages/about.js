import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { getFileBySlug } from "@/lib/mdx";

const DEFAULT_LAYOUT = "DefaultLayout";

export async function getStaticProps() {
  const authorDetails = await getFileBySlug("misc", "about");
  console.log("authorDetails", authorDetails);
  return { props: { authorDetails } };
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
}
