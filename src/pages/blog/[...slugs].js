import React from "react";
import { allBlogPosts, allSeries } from "@/data/dataset";
import { getFileBySlug } from "@/libs/mdx";
import PostLayout from "@/components/layouts/PostLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticPaths({ locales }) {
  const paths = allBlogPosts.map((post) => `/${post.locale}${post.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const { slugs } = params;

  const postData = await getFileBySlug("blog", locale, slugs?.join("/"));
  const slug = `/blog/${[...slugs].join("/")}`;

  const post = allBlogPosts.find((v) => v.slug === slug && v.locale === locale);
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
      ...(await serverSideTranslations(locale, ["common", "blog"])),
    },
  };
}

export default function BlogPage(props) {
  return <PostLayout {...props} />;
}
