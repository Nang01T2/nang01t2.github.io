import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { getFileBySlug } from "@/libs/mdx";
import AuthorLayout from "@/components/layouts/AuthorLayout";

export async function getStaticProps() {
  const postData = await getFileBySlug("misc", "about");
  return { props: { ...postData } };
}

export default function About(props) {
  return (
    <AuthorLayout
      toc={props?.toc}
      mdxSource={props?.content}
      frontMatter={props?.metadata}
    />
  );

  return (
    <MDXLayoutRenderer
      layout={authorDetails?.metadata?.layout}
      mdxSource={authorDetails?.content}
      frontMatter={authorDetails?.metadata}
    />
  );
}
