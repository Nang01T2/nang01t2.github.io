import { MDXLayoutRenderer } from '@/components/MDXComponents';
import UnderConstruction from "@/components/UnderConstruction";

import { formatSlug, getFiles, getFileBySlug } from "@/lib/get-posts-data";

export async function getStaticPaths() {
  const blogFiles = getFiles("blog");
  const paths = blogFiles.map((p) => {
    //console.log('file: ', formatSlug(p).split('/'));
    return {
      params: {
        id: formatSlug(p).split("/"),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getFileBySlug("blog", params?.id.join("/"));
  return {
    props: {
      ...postData,
    },
  };
}

export default function PostDetail({ metadata, content, toc }) {
  console.log("TOC", toc);
  console.log("Metadata", metadata);
  //console.log('content', content);
  return (
    <>
      {metadata?.draft !== true ? (
        <MDXLayoutRenderer
          layout={metadata.layout || "BlogLayout"}
          toc={toc}
          mdxSource={content}
          frontMatter={metadata}
          //authorDetails={authorDetails}
          //prev={prev}
          //next={next}
        />
      ) : (
        <UnderConstruction />
      )}
    </>
  );
}
