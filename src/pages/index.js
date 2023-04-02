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
  return (
    <div>
      <div className="header-info">
        <div className="greetings">
          <p className="greetings-heading">
            Greetings, Programs! in the Matrix called Earth.
          </p>
          <p className="greetings-statement">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut l
          </p>
        </div>
      </div>
      <div className="posts-display-container">
        <p className="quote">All Posts</p>
      </div>
      <CardLayout postsMetaData={postsMetaData} />

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
    </div>
  );
}

export async function getStaticProps() {
  const postsMetaData = getAllPostsMetadata();
  return {
    props: {
      postsMetaData,
    },
  };
}
