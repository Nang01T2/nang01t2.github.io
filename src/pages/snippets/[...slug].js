import React from "react";
import { formatSlug, getFiles, getFileBySlug } from "@/libs/mdx";
import UnderConstruction from "@/components/UnderConstruction";
import { MDXLayoutRenderer } from "@/components/MDXComponents";

export async function getStaticPaths() {
  const blogFiles = getFiles("snippets");
  const paths = blogFiles.map((p) => {
    return {
      params: {
        slug: formatSlug(p).split("/"),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  const postData = await getFileBySlug("snippets", params?.slug.join("/"));
  return {
    props: {
      ...postData,
    },
  };
}

export default function SnippetPage(props) {
  return (
    <>
      {props?.metadata?.draft !== true ? (
        <MDXLayoutRenderer
          layout={props?.metadata?.layout || "PostLayout"}
          toc={props?.toc}
          mdxSource={props?.content}
          frontMatter={props?.metadata}
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
