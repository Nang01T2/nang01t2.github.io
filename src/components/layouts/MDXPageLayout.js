import React from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { fadeInHalf, staggerHalf } from "@/data/animations";
import Hr from "@/components/common/Hr";
import CalenderIcon from "@/components/icons/CalenderIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import IconText from "@/components/common/IconText";
import TocTop from "@/components/TocTop";
import TocBanner from "@/components/TocBanner";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import Container from "@/components/layouts/Container";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "@/components/MDXComponents";

export default function PostLayout(props) {
  const { frontMatter } = props;
  return (
    <Container>
      {/* <BlogSEO {...post} url={post.slug} summary={post.description} images={[]} />
       */}
      {/* <ReadingProgressBar /> */}

      <motion.section
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid justify-center grid-cols-1 lg:grid-cols-12"
      >
        {/* Post Header */}
        <motion.div variants={fadeInHalf} className="col-span-12 mt-0">
          <div className="space-y-16">
            <div>
              <h1 className="mb-5 text-3xl text-center font-headings md:text-5xl">
                {frontMatter?.title}
              </h1>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2 space-x-2 text-base">
                  <IconText
                    Icon={CalenderIcon}
                    text={dayjs(frontMatter.date).format("YYYY.MM.DD")}
                  />
                  <IconText
                    Icon={ClockIcon}
                    text={frontMatter?.readingTime?.text}
                  />
                </div>
              </div>
              <Hr className="mt-4" />
            </div>
          </div>
        </motion.div>

        {/* Post Content */}
        <motion.div
          variants={fadeInHalf}
          className="lg:col-start-1 lg:col-end-13"
        >
          <div className="flex gap-6">
            <div className="w-full">
              <TocTop className="lg:hidden" tableOfContents={props?.toc} />
              <MDXRemote {...props?.mdxSource} components={MDXComponents} />
            </div>
            <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
              <TocBanner tableOfContents={props?.toc} />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </Container>
  );
}
