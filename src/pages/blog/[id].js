import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

import { getAllPostsPath, getPostData } from "@/lib/get-posts-data";

import NextOptimizedImage from "@/components/NextOptimizedImage";
import HoverableLink from "@/components/HoverableLink";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const h1_color = c4,
  h1_text_decoration = c4 + "80",
  h2_color = c4,
  h3_color = c4;
const p_color = c1 + "f2",
  ul_color = c1 + "e6",
  ol_color = c1 + "e6";
const em_background = c1 + "26",
  em_color = c1 + "f2";
const strong_background = c5 + "26",
  strong_color = c4 + "f2";
const hr_color = c1 + "80",
  blockquote_background_color = c3 + "26",
  blockquote_border = c3 + "e6";

function getHeadingAnchorProps(props) {
  let id = "";
  let modifiedProps = {};
  if (typeof props.children === "string")
    modifiedProps["children"] = [props.children];
  else modifiedProps["children"] = props.children;

  let split_array =
    modifiedProps.children[modifiedProps.children.length - 1].split(":=:");
  if (split_array.length > 1) {
    id = split_array[1];
    modifiedProps.children[modifiedProps.children.length - 1] = split_array[0];
  }

  return [modifiedProps, id];
}

const components = {
  img: (props) => <NextOptimizedImage img_props={props} />,
  // h1: (props) => {
  //   const [modifiedProps, id] = getHeadingAnchorProps(props);
  //   return (
  //     <h1
  //       style={{
  //         fontFamily: "'Ubuntu', sans-serif",
  //         fontSize: "calc(1rem + 1.5vw)",
  //         color: h1_color,
  //         margin: "1vh 0 1vh 0",
  //         overflowWrap: "break-word",
  //       }}
  //       id={id}
  //       {...modifiedProps}
  //     />
  //   );
  // },
  // h2: (props) => {
  //   const [modifiedProps, id] = getHeadingAnchorProps(props);
  //   return (
  //     <h2
  //       style={{
  //         fontFamily: "'Maven Pro', sans-serif",
  //         fontSize: "calc(1rem + 1vw)",
  //         color: h2_color,
  //         margin: "1vh 0 1vh 0",
  //         overflowWrap: "break-word",
  //       }}
  //       id={id}
  //       {...modifiedProps}
  //     />
  //   );
  // },

  // h3: (props) => {
  //   const [modifiedProps, id] = getHeadingAnchorProps(props);
  //   return (
  //     <h3
  //       style={{
  //         fontFamily: "'Maven Pro', sans-serif",
  //         fontSize: "calc(1rem + 0.5vw)",
  //         color: h3_color,
  //         margin: "1vh 0 1vh 0",
  //         overflowWrap: "break-word",
  //       }}
  //       id={id}
  //       {...modifiedProps}
  //     />
  //   );
  // },

  // p: (props) => (
  //   <p
  //     style={{
  //       fontFamily: "'Source Sans Pro', sans-serif",
  //       fontSize: "calc(1rem + 0.1vw)",
  //       color: p_color,
  //       margin: "0vh 0 1vh 0",
  //       overflowWrap: "break-word",
  //     }}
  //     {...props}
  //   />
  // ),
  // ul: (props) => (
  //   <ul
  //     style={{
  //       fontFamily: "'Source Sans Pro', sans-serif",
  //       fontSize: "calc(1rem + 0.1vw)",
  //       color: ul_color,
  //       margin: "1vh 0 1vh calc(2vw)",
  //       overflowWrap: "break-word",
  //     }}
  //     {...props}
  //   />
  // ),

  // ol: (props) => (
  //   <ol
  //     style={{
  //       fontFamily: "'Source Sans Pro', sans-serif",
  //       fontSize: "calc(1rem + 0.1vw)",
  //       color: ol_color,
  //       margin: "1vh 0 1vh calc(2vw)",
  //       overflowWrap: "break-word",
  //     }}
  //     {...props}
  //   />
  // ),
  // a: (props) => <HoverableLink link_props={props} />,
  // em: (props) => (
  //   <em
  //     style={{
  //       fontFamily: "'Source Sans Pro', sans-serif",
  //       fontSize: "calc(1rem + 0.1vw)",
  //       fontStyle: "normal",
  //       backgroundColor: em_background,
  //       color: em_color,
  //       margin: "0vh 0 1vh 0",
  //       padding: "0 2px 0 2px",
  //       borderRadius: "2px",
  //     }}
  //     {...props}
  //   />
  // ),
  // strong: (props) => (
  //   <strong
  //     style={{
  //       fontFamily: "'Source Sans Pro', sans-serif",
  //       fontSize: "calc(1rem + 0.1vw)",
  //       fontStyle: "normal",
  //       fontWeight: "bold",
  //       color: strong_color,
  //       margin: "0vh 0 1vh 0",
  //       overflowWrap: "break-word",
  //     }}
  //     {...props}
  //   />
  // ),
  // hr: (_) => (
  //   <hr
  //     style={{ margin: "2vh 25% 2vh 25%", border: `1px solid ${hr_color}` }}
  //   />
  // ),
  blockquote: (props) => (
    <blockquote
      style={{
        fontStyle: "italic",
        backgroundColor: blockquote_background_color,
        padding: "10px",
        margin: "1vh 0 1vh 0",
        borderLeft: `5px solid ${blockquote_border}`,
      }}
      {...props}
    />
  ),
  // /** Card component */
  // Card: (props) => (
  //   <div
  //     style={{
  //       background: "#333",
  //       borderRadius: "0.25rem",
  //       padding: "0.5rem 1rem",
  //       color: "red",
  //     }}
  //     {...props}
  //   />
  // ),
};

/** @type {import("rehype-pretty-code").Options} */
export const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

export default function Blog({ postMetadata, postContent }) {
  //console.log("postContent", postContent);
  return (
    <>
      <article>
        <MDXRemote {...postContent} components={components} />
      </article>
    </>
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
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [remarkFrontmatter, remarkMath, remarkGfm],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: [
                "anchor no-underline flex items-center before:-translate-x-[8px] before:-ml-[20px] before:bg-no-repeat before:bg-contain before:w-[20px] before:h-[20px] before:content-[''] hover:before:bg-[url('/link.svg')]",
              ],
            },
            behaviour: "wrap",
          },
        ],
        [rehypePrettyCode, rehypePrettyCodeOptions],
      ],
    },
  });
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      id: params.id,
    },
  };
}
