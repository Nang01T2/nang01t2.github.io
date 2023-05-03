import React from "react";
import { allBlogPosts, allSeries } from "@/data/dataset";
import { getFileBySlug } from "@/libs/mdx";
import PostLayout from "@/components/layouts/PostLayout";

export async function getStaticPaths() {
  const paths = allBlogPosts.map((post) => post.slug);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slugs } = params;
  const postData = await getFileBySlug("blog", slugs?.join("/"));
  const slug = `/blog/${[...slugs].join("/")}`;
  const post = allBlogPosts.find((v) => v.slug === slug);
  const series = post?.seriesName
    ? allSeries.find((series) =>
        series.slug.startsWith(`/blog/${post.seriesName}`)
      ) ?? null
    : null;
  return {
    props: {
      mdxSource: postData.content,
      post,
      series,
    },
  };
}

export default function BlogPage(props) {
  return <PostLayout {...props} />;
}
