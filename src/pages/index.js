import { useState } from 'react';
import { getAllPostsMetadata } from '@/lib/get-posts-data';
import CardLayout from '@/components/CardLayout';

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
      <div className="divide-y divide-gray-700 dark:divide-gray-700">
        <CardLayout postsMetaData={filteredPosts} />
        {/* <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postsMetaData = getAllPostsMetadata(1);
  return {
    props: {
      postsMetaData,
    },
  };
}
