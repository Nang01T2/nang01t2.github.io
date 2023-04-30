import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { fadeInHalf, staggerHalf } from "@/data/animations";
import Hr from "@/components/common/Hr";
import CalenderIcon from "@/components/icons/CalenderIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import IconText from "@/components/common/IconText";
import Title from "@/components/common/Title";
import TocTop from "@/components/TocTop";
import TocBanner from "@/components/TocBanner";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import Container from "@/components/layouts/Container";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "@/components/MDXComponents";

export default function PostLayout(props) {
  const {
    category,
    frontMatter,
    mdxSource: content,
    toc: tableOfContents,
  } = props;
  const headerTagTitle = frontMatter?.category;
  const headerTagSlug = `/${frontMatter?.slug?.split("/")?.at(0)}?key=${
    frontMatter?.category ?? "all"
  }`;

  console.log("frontMatter", frontMatter);
  return (
    <Container className="flex flex-col justify-between">
      {/* <BlogSEO {...post} url={post.slug} summary={post.description} images={[]} />
       */}
      {/* <ReadingProgressBar /> */}
      <div className="max-w-full prose prose-lg dark:prose-dark">
        <motion.section
          variants={staggerHalf}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid justify-center grid-cols-1 lg:grid-cols-12 "
        >
          {/* Post Header */}
          <motion.div variants={fadeInHalf} className="col-span-12 mt-0">
            <div className="space-y-16">
              <div>
                <Title className="mx-auto mb-4 max-w-3xl text-center">
                  {frontMatter?.title}
                </Title>
                {headerTagTitle && (
                  <div className="mt-2 flex justify-center gap-1">
                    {frontMatter.category && <span>{category}: </span>}
                    <Link href={headerTagSlug}>
                      <span className="text-sm font-medium sm:text-base">
                        {headerTagTitle}
                      </span>
                    </Link>
                  </div>
                )}
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
            className="lg:col-start-1 lg:col-end-13 "
          >
            <div className="flex gap-6">
              <div className="w-full">
                <TocTop
                  className="lg:hidden"
                  tableOfContents={tableOfContents}
                />
                <MDXRemote {...content} components={MDXComponents} />
              </div>
              {tableOfContents?.length > 0 && (
                <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
                  <TocBanner tableOfContents={tableOfContents} />
                </div>
              )}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </Container>
  );
}
