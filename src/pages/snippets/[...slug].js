import React from "react";
import { formatSlug, getFiles, getFileBySlug } from "@/libs/mdx";
import UnderConstruction from "@/components/UnderConstruction";
import MDXPageLayout from "@/components/layouts/MDXPageLayout";
import Container from "@/components/layouts/Container";

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
  const { toc, content, metadata } = props;
  return (
    <>
      {metadata?.draft !== true ? (
        <MDXPageLayout
          category="snippet"
          toc={toc}
          mdxSource={content}
          frontMatter={metadata}
        />
      ) : (
        <Container>
          <UnderConstruction />
        </Container>
      )}
    </>
  );
}
