import { useState } from "react";
import { getAllPostsMetadata } from "@/lib/get-posts-data";
import CardLayout from "@/components/CardLayout";
import PageLayout from "@/components/PageLayout";
import styles from "@/styles/Home.module.css";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const header_background = c4,
  greetings_heading = c6,
  greetings_statement = c6,
  quote_color = c5;

const home_page_url = "https://santhalakshminarayana.github.io/";
const description =
  "I'm Santha Lakshmi Narayana, a voyager on mission exploring digital universe to understand how it works.";

export default function Home({ postsMetaData }) {
  const [filteredPosts, setFilteredPosts] = useState(postsMetaData);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <>
      <div>
        <CardLayout postsMetaData={filteredPosts} />
        <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button>
      </div>

      <style jsx>{`
        .header-info {
          background: ${header_background};
        }
        .greetings {
          padding: 2vw 10vw 2vw 10vw;
        }
        .greetings-heading {
          font-family: "Ubuntu", sans-serif;
          font-size: 2em;
          text-align: center;
          color: ${greetings_heading};
        }
        .greetings-statement {
          font-family: "Ubuntu", sans-serif;
          font-size: 1.5em;
          padding-top: 1vh;
          text-align: center;
          color: ${greetings_statement};
        }
        .greetings-tags {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          padding: 1vw 5vw 1vw 5vw;
        }
        .posts-display-container {
          padding: 1vh 10vw 1vh 10vw;
        }
        .quote {
          color: ${quote_color};
          font-family: "Ubuntu", sans-serif;
          font-size: calc(2rem + 0.5vw);
        }
        @media screen and (max-width: 920px) {
          .greetings-heading {
            font-size: 20px;
          }
          .greetings-statement {
            font-size: 18px;
          }
          .greetings-tags {
            display: none;
          }
          .posts-display-container {
            padding: 1vh 5vw 1vh 5vh;
          }
        }
        @media screen and (max-width: 480px) {
          .greetings-heading {
            font-size: 18px;
          }
          .greetings-statement {
            font-size: 16px;
          }
          .greetings-tags {
            display: none;
          }
          .posts-display-container {
            padding: 1vh 5vw 1vh 5vh;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const postsMetaData = getAllPostsMetadata(1);
  //console.log("postsMetaData", postsMetaData);
  return {
    props: {
      postsMetaData,
      layout: "main",
    },
  };
}
