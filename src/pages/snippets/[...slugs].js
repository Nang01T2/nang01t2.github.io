import React from "react";
import { formatSlug, getFiles, getFileBySlug } from "@/libs/mdx";
import PostLayout from "@/components/layouts/PostLayout";
//import { allSnippets } from "@/data/dataset";

export async function getStaticPaths() {
  const blogFiles = getFiles("snippets");
  const paths = blogFiles.map((p) => {
    return {
      params: {
        slugs: formatSlug(p).split("/"),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slugs } = params;
  const postData = await getFileBySlug("snippets", slugs?.join("/"));
  //const slug = `/snippets/${[...slugs].join("/")}`;
  //const post = allSnippets.find((v) => v.slug === slug);

  return {
    props: {
      tableOfContents: postData.toc,
      mdxSource: postData.content,
      frontMatter: postData.metadata,
      //post,
    },
  };
}

export default function SnippetPage(props) {
  return <PostLayout category="snippet" {...props} />;
}
