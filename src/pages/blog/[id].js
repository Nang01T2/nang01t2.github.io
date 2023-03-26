import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getAllPostsPath, getPostData } from "@/lib/get-posts-data";

const components = {
  h1: (props) => (
    <h1
      style={{
        fontSize: "calc(1rem + 1.5vw)",
        color: "black",
        margin: "1vh 0 1vh 0",
      }}
      {...props}
    />
  ),

  p: (props) => (
    <p
      style={{
        fontSize: "calc(1rem + 0.1vw)",
        color: "#000000e6",
        margin: "0vh 0 1vh 0",
      }}
      {...props}
    />
  ),
  /** Card component */
  Card: (props) => (
    <div
      style={{
        background: "#333",
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
        color: "red",
      }}
      {...props}
    />
  ),
};

export default function Blog({ postMetadata, postContent }) {
  return (
    <div>
      <div className="blog-content">
        <MDXRemote {...postContent} components={components} />
      </div>

      <style jsx>{`
        .blog-content {
          display: flex;
          flex: 100%;
          flex-direction: column;
          margin: 1vw 25vw 1vw 25vw;
          width: 50vw;
          max-width: 50vw;
        }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content);
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      id: params.id,
    },
  };
}
