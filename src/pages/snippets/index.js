import { AnimatePresence, motion } from "framer-motion";
import Title from "@/components/common/Title";
import React from "react";
import { fadeInHalf, staggerHalf, staggerImmediate } from "@/data/animations";
import PlainText from "@/components/common/PlainText";
import Pill from "@/components/common/Pill";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ snippetList }) {
  const router = useRouter();
  const selectedKey = router.query?.key;

  const isAll = !selectedKey || selectedKey === "all";
  const allSnippetsCnt = snippetList?.reduce(
    (ac, snippet) => ac + snippet?.postList?.length,
    0
  );

  return (
    <>
      <Title>Code Snippets</Title>
      <motion.div
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={fadeInHalf}>
          <PlainText>Testing Testing Testing motion animation</PlainText>
        </motion.div>
        <motion.div
          className="bg-primary sticky top-0 z-10 -mx-2 flex items-center gap-2 overflow-scroll bg-opacity-70 px-2 py-4 backdrop-blur transition-all no-scrollbar dark:bg-opacity-70"
          variants={staggerImmediate}
        >
          <Link href="?key=all">
            <Pill selected={isAll} className="cursor-pointer whitespace-nowrap">
              All <span className="text-xs">{allSnippetsCnt}</span>
            </Pill>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
