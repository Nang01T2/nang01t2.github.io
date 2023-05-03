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
import Tag from "@/components/common/Tag";
import TocTop from "@/components/TocTop";
import TocBanner from "@/components/TocBanner";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import Container from "@/components/layouts/Container";
import { MDXRemote } from "next-mdx-remote";
import TableOfContents from "@/components/TableOfContents";
import { mdxComponents } from "@/components/MdxComponents";
import UnderConstruction from "@/components/UnderConstruction";
import { PageSEO, BlogSEO } from "../SEO";
//import MdxRenderer from "@/components/MdxRenderer";

export default function PostLayout(props) {
  const { post, series, mdxSource } = props;
  const headerTagTitle = series?.title ?? post.snippetName;
  const headerTagSlug =
    series?.slug ?? `/snippets?key=${post.snippetName ?? "all"}`;

  //console.log("series", props?.series);
  //console.log("post", post);
  if (post?.draft === true) {
    return (
      <Container className="flex flex-col justify-between">
        <PageSEO title={`Under Construction - ${post.title}`} />
        <UnderConstruction />
      </Container>
    );
  }

  return (
    <Container className="flex flex-col justify-between">
      <BlogSEO
        {...post}
        url={post.slug}
        summary={post.description}
        images={[]}
      />

      <ReadingProgressBar />
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
                  {post?.title}
                </Title>
                {headerTagTitle && (
                  <div className="mt-2 flex justify-center gap-1">
                    {post.snippetName && <span>snippet: </span>}
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
                      text={dayjs(post.date).format("YYYY.MM.DD")}
                    />
                    <IconText
                      Icon={ClockIcon}
                      text={`${post?.readingMinutes} min read`}
                    />
                  </div>
                </div>
                {/* <div className="flex items-center justify-center mt-12  gap-2">
                  {frontMatter?.tags?.map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div> */}
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
                <TableOfContents className="lg:hidden" toc={post?.toc} />

                {/* <TocTop className="lg:hidden" tableOfContents={post?.toc} /> */}

                <MDXRemote {...mdxSource} components={mdxComponents} />
              </div>
              {post?.toc?.length > 0 && (
                <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
                  <TocBanner tableOfContents={post?.toc} />
                </div>
              )}
            </div>
          </motion.div>

          {/* Post Footer */}
          <motion.div
            variants={fadeInHalf}
            className="col-span-12 mt-12 space-y-8 lg:mt-24"
          >
            <div className="flex gap-2">
              {post?.tags?.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </Container>
  );
}
