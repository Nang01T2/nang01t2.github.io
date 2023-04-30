import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInHalf, staggerHalf, staggerImmediate } from "@/data/animations";
import Container from "@/components/layouts/Container";
import Title from "@/components/common/Title";
import PlainText from "@/components/common/PlainText";
import Link from "next/link";
import { reducedAllSnippets } from "@/data/dataset";
import { ReducedPost } from "@/libs/types";
import Pill from "@/components/common/Pill";
import title from "title";
import SnippetListItem from "@/components/SnippetListItem";
import Hr from "@/components/common/Hr";

type Snippet = {
  key: string;
  postList: ReducedPost[];
};

export const getStaticProps: GetStaticProps = () => {
  const tagSnippets = reducedAllSnippets.reduce<{
    [key: string]: ReducedPost[];
  }>((ac, snippet) => {
    if (!snippet.snippetName) {
      return ac;
    }

    if (!ac[snippet.snippetName]) {
      ac[snippet.snippetName] = [];
    }

    ac[snippet.snippetName].push(snippet);
    return ac;
  }, {});

  console.log("tagSnippets", tagSnippets);

  const snippetList = Object.keys(tagSnippets)
    .map<Snippet>((key) => ({
      key,
      postList: tagSnippets[key],
    }))
    .sort((a, b) => b.postList.length - a.postList.length);

  return {
    props: { snippetList },
  };
};

export default function Snippets({ snippetList }: { snippetList: Snippet[] }) {
  const router = useRouter();
  const selectedKey = router.query?.key;

  const isAll = !selectedKey || selectedKey === "all";
  const allSnippetsCnt = snippetList.reduce(
    (ac, snippet) => ac + snippet.postList.length,
    0
  );

  const filteredSnippetList = snippetList.filter((snippet) => {
    if (isAll) return true;

    return snippet.key === selectedKey;
  });

  return (
    <Container className="flex flex-col justify-between">
      <Title>Code Snippets</Title>
      <motion.div
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={fadeInHalf}>
          <PlainText>Github blog testing.</PlainText>
        </motion.div>
        <motion.div
          className="bg-primary sticky top-0 z-10 -mx-2 flex items-center gap-2 overflow-scroll bg-opacity-70 px-2 py-4 backdrop-blur transition-all no-scrollbar dark:bg-opacity-70"
          variants={staggerImmediate}
        >
          <motion.div variants={fadeInHalf}>
            <Link href="?key=all">
              <Pill
                selected={isAll}
                className="cursor-pointer whitespace-nowrap"
              >
                All <span className="text-xs">{allSnippetsCnt}</span>
              </Pill>
            </Link>
          </motion.div>
          {snippetList.map(({ key, postList }) => (
            <motion.div key={key} variants={fadeInHalf}>
              <Link href={`?key=${key}`}>
                <Pill
                  className="cursor-pointer whitespace-nowrap"
                  selected={key === selectedKey}
                >
                  {title(key)}{" "}
                  <span className="text-xs">{postList.length}</span>
                </Pill>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 space-y-16">
          {filteredSnippetList.map(({ key, postList }) => {
            return (
              <>
                <motion.ul
                  key={key}
                  className="mt-4 grid grid-cols-2 gap-4"
                  variants={staggerImmediate}
                >
                  <AnimatePresence mode="wait">
                    {postList.map((post) => (
                      <motion.li key={post.slug} variants={fadeInHalf}>
                        <SnippetListItem post={post} />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
                {/* <Hr /> */}
              </>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
}
