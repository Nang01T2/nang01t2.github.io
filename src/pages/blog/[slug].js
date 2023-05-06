import React from 'react';
import { allSeries, allSeriesName } from '@/data/dataset';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import {
  fadeIn,
  fadeInSlideToLeft,
  fadeInUp,
  staggerTwo,
} from '@/data/animations';

import Container from '@/components/layouts/Container';
import { PageSEO } from '@/components/SEO';
import HoverCard from '@/components/HoverCard';
import PostListItem from '@/components/PostListItem';
import IconText from '@/components/common/IconText';
import CalenderIcon from '@/components/icons/CalenderIcon';
import ListIcon from '@/components/icons/ListIcon';

export const getStaticPaths = async ({ locales }) => {
  //const paths = allSeriesName.map((seriesName) => `/blog/${seriesName}`);
  return {
    paths:
      allSeriesName.length > 0
        ? locales
            .map((l) =>
              [l, allSeriesName.map((seriesName) => `blog/${seriesName}`)]
                .flatMap((x) => x)
                .join('/')
            )
            .map((i) => `/${i}`)
        : [],
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const { slug } = params;

  const series = allSeries.find(
    (v) => v.locale === locale && v.seriesName === slug
  );
  if (!series) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      series: {
        ...series,
        posts: series.posts?.filter((x) => x.locale === locale),
      },
    },
  };
};

export default function BlogPage({ series }) {
  if (!series) return null;
  return (
    <Container className="flex flex-col justify-between">
      <PageSEO
        title={series.title}
        description={series.description}
        url={series.slug}
      />
      <motion.section variants={staggerTwo} initial="initial" animate="animate">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-32">
          <div className="sm:sticky sm:top-8 sm:self-start">
            <motion.div variants={fadeInSlideToLeft} className="sm:col-span-1">
              <HoverCard>
                <div className="relative mx-auto h-[336px] w-[240px] select-none rounded-lg bg-neutral-200 px-11 pb-16 pt-12 dark:bg-neutral-800">
                  <div className="absolute inset-y-0 left-4 w-[1px] bg-neutral-50 dark:bg-neutral-700" />
                  <div className="text-primary flex h-full break-keep bg-neutral-50 px-3 py-4 text-xl font-semibold dark:bg-neutral-700">
                    {series.title}
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          </div>

          <div className="sm:col-span-2">
            <motion.div
              className="bg-secondary rounded-lg px-5 py-4"
              variants={fadeIn}
            >
              <p className="text-primary font-medium">{series.description}</p>
              <div className="text-secondary mt-1 flex gap-2">
                <IconText
                  Icon={CalenderIcon}
                  text={dayjs(series.date).format('YY.MM.DD')}
                />
                <IconText
                  Icon={ListIcon}
                  text={`${series.posts.length} posts`}
                />
              </div>
            </motion.div>

            <div className="mt-16 space-y-4">
              {series.posts.map((post, i) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <div className="flex space-x-6">
                    <div className="pt-4 font-bold">{i + 1}.</div>
                    <PostListItem post={post} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}
