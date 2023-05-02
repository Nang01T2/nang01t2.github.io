import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  fadeInHalf,
  fadeInSlideToLeft,
  fadeInUp,
  staggerHalf,
  staggerOne,
} from "@/data/animations";
import Link from "next/link";
import useSearch from "@/libs/useSearch";
import PlainText from "@/components/common/PlainText";
import SearchInput from "@/components/common/SearchInput";
import Container from "@/components/layouts/Container";
import { PageSEO } from "@/components/SEO";
import PostListItem from "@/components/PostListItem";
import CollectionItem from "@/components/CollectionItem";
import Title from "@/components/common/Title";
import SubTitle from "@/components/common/SubTitle";
import { allSeries, reducedAllBlogPosts } from "@/data/dataset";

export const getStaticProps = () => {
  return {
    props: {
      postList: reducedAllBlogPosts,
      seriesList: allSeries,
    },
  };
};

export default function BlogPage({ postList, seriesList }) {
  const { searchValue, searchHandler } = useSearch();
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);

  useEffect(() => {
    setFilteredSeries(
      seriesList.filter((series) =>
        series.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setFilteredBlogPosts(
      postList?.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <Container className="flex flex-col justify-between">
      <PageSEO title="Blog" url="/blog" />
      <Title>Blog</Title>
      <motion.div
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={fadeInHalf}>
          <PlainText>Test</PlainText>
        </motion.div>

        <motion.div variants={fadeInHalf}>
          <SearchInput
            className="relative mb-4 w-full"
            //placeholder="blog title"
            onChange={searchHandler}
          />
        </motion.div>

        <motion.div
          className="-my-12 -ml-8 flex items-center space-x-6 overflow-scroll py-12 pl-8 no-scrollbar"
          variants={staggerOne}
        >
          <AnimatePresence mode="wait">
            {filteredSeries.map((series) => (
              <motion.div key={series.slug} variants={fadeInSlideToLeft}>
                <CollectionItem item={series} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-16 mb-4 flex items-end gap-2"
          variants={fadeInHalf}
        >
          <SubTitle>{!searchValue ? "All Posts" : "Filtered Posts"}</SubTitle>
          <span className="font-bold">({filteredBlogPosts.length})</span>
        </motion.div>

        <motion.div
          className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
          variants={staggerHalf}
        >
          {filteredBlogPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ amount: 0.6, once: true }}
              >
                <PostListItem post={post} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
