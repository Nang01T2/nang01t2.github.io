import styles from "@/styles/Markdown.module.css";
import NextOptimizedImage from "@/components/NextOptimizedImage";

const MDXComponents = {
  img: (props) => <NextOptimizedImage img_props={props} />,
  blockquote: (props) => (
    <blockquote {...props} className={styles.blockquote} />
  ),
  //p: (props) => <p {...props} className={styles.p} />,
  //a: (props) => <a {...props} className={styles.link} />,
  //h1: (props) => <h1 {...props} className={styles.postTitle} />,
};

export default MDXComponents;
