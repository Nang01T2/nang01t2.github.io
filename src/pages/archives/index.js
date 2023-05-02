import React from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { fadeInHalf, staggerHalf } from "@/data/animations";
import Container from "@/components/layouts/Container";
import { PageSEO } from "@/components/SEO";
import Link from "next/link";

import Hr from "@/components/common/Hr";
import IconText from "@/components/common/IconText";
import LinkHover from "@/components/common/LinkHover";
import PlainText from "@/components/common/PlainText";
import SubTitle from "@/components/common/SubTitle";
import Tag from "@/components/common/Tag";
import Title from "@/components/common/Title";
import ListIcon from "@/components/icons/ListIcon";
import {
  allSeries,
  allTags,
  reducedAllBlogPosts,
  reducedAllSnippets,
} from "@/data/dataset";

const classifyPosts = (posts) => {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reduce((ac, v) => {
      const year = new Date(v.date).getFullYear();

      if (!ac[year]) {
        ac[year] = [];
      }
      ac[year].push(v);

      return ac;
    }, {});
};

const PostSection = ({ classifiedPosts }) => {
  return (
    <>
      {Object.keys(classifiedPosts)
        .reverse()
        .map((year) => (
          <div key={year} className="mt-4">
            <div className="text-lg font-bold">
              {year}
              <span className="ml-1 text-sm">
                ({classifiedPosts[year].length})
              </span>
            </div>
            <ul>
              {classifiedPosts[year].map((post) => (
                <li key={post.slug}>
                  <Link
                    href={post.slug}
                    className="text-tertiary transition hover:text-primary"
                  >
                    <div className="flex items-end gap-1">
                      <span className="mb-0.5 w-8 text-xs">
                        {dayjs(post.date).format("MM.DD")}
                      </span>
                      <span>{post.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      classifiedPosts: classifyPosts(reducedAllBlogPosts),
      classifiedSnippets: classifyPosts(reducedAllSnippets),
      allSeries,
      allTags,
    },
  };
};

export default function ArchivePage({
  classifiedPosts,
  classifiedSnippets,
  allSeries,
  allTags,
}) {
  return (
    <Container className="flex flex-col justify-between">
      <PageSEO
        title="Archives"
        description="Store and manage all my posts in a single place."
        url="/archives"
      />
      <Title>Archives</Title>

      <motion.div
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={fadeInHalf}>
          <PlainText>
            Store and manage all my posts in a single place.
          </PlainText>
        </motion.div>

        {/* Series */}
        <motion.div className="mt-12" variants={fadeInHalf}>
          <SubTitle>
            Series<span className="ml-2 text-sm">({allSeries.length})</span>
          </SubTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {allSeries.map((series) => (
              <LinkHover
                key={series.slug}
                href={series.slug}
                className="px-4 py-2 ring-1 ring-neutral-300 dark:ring-neutral-700"
              >
                <div>
                  <span>{series.title}</span>
                  <div className="text-tertiary flex gap-2">
                    <span className="text-xs">
                      {dayjs(series.date).format("YYYY-MM-DD")}
                    </span>
                    <IconText Icon={ListIcon} text={series.posts.length} />
                  </div>
                </div>
              </LinkHover>
            ))}
          </div>
        </motion.div>

        <Hr className="my-8" />

        {/* Tags */}
        <motion.div className="mt-12" variants={fadeInHalf}>
          <SubTitle>
            Tags<span className="ml-2 text-sm">({allTags.length})</span>
          </SubTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
        </motion.div>

        <Hr className="my-8" />

        {/* Posts, Snippets */}
        <motion.div
          variants={fadeInHalf}
          className="mt-4 grid grid-cols-1 gap-8 delay-100 sm:grid-cols-2"
        >
          <div>
            <SubTitle>Posts</SubTitle>
            <PostSection classifiedPosts={classifiedPosts} />
          </div>
          <div>
            <SubTitle>Snippets</SubTitle>
            <PostSection classifiedPosts={classifiedSnippets} />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
