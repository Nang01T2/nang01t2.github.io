import React from "react";
import { getFileBySlug } from "@/libs/mdx";
import PostLayout from "@/components/layouts/PostLayout";
import { allSnippets } from "@/data/dataset";

export async function getStaticPaths({ locales }) {
  const paths = allSnippets.map((post) => `/${post.locale}${post.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const { slugs } = params;

  const postData = await getFileBySlug("snippets", locale, slugs?.join("/"));
  const slug = `/snippets/${[...slugs].join("/")}`;
  const post = allSnippets.find((v) => v.slug === slug && v.locale === locale);

  return {
    props: {
      mdxSource: postData.content,
      post,
    },
  };
}

export default function SnippetPage(props) {
  return <PostLayout {...props} />;
}
