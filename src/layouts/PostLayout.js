import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { fadeInHalf, staggerHalf } from '../data/animations';
import Title from '@/components/common/Title';
import Hr from '@/components/common/Hr';
import CalenderIcon from '@/components/icons/CalenderIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import IconText from '@/components/common/IconText';
import TocTop from '@/components/TocTop';
import TocBanner from '@/components/TocBanner';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Layout from '@/components/layouts/Layout';

export default function PostLayout(props) {
  //console.log('props', props);
  const { frontMatter } = props;
  console.log('frontMatter', frontMatter);
  return (
    <Layout>
      {/* <BlogSEO {...post} url={post.slug} summary={post.description} images={[]} />
       */}
      <ReadingProgressBar />
      <motion.section
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Post Header */}
        <motion.div variants={fadeInHalf}>
          <Title className="mx-auto mb-4 max-w-3xl text-center">
            {frontMatter?.title}
          </Title>
          <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
            <div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
              <IconText
                Icon={CalenderIcon}
                text={dayjs(frontMatter.date).format('YYYY.MM.DD')}
              />
              <IconText
                Icon={ClockIcon}
                text={frontMatter?.readingTime?.text}
              />
            </div>
          </div>
          <Hr className="mt-4" />
        </motion.div>

        {/* Post Content */}
        <motion.div variants={fadeInHalf} className="relative gap-8 lg:flex">
          <div className="prose prose-neutral w-full max-w-3xl font-spoqa dark:prose-dark">
            <TocTop
              className="hidden md:visible"
              tableOfContents={props?.toc}
            />
            {/* <MDXContent components={mdxComponents} /> */}
            {props?.children}
          </div>

          {/* <div className="mt-12 ml-auto">
            <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
              <TocBanner tableOfContents={props?.toc} />
            </div>
          </div> */}
        </motion.div>
      </motion.section>
    </Layout>
  );
}
