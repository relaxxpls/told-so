import Head from "next/head";
import { useRouter } from "next/router";
import { type FC, useEffect, useState } from "react";

import postsData from "../assets/data/posts";
import Post, { type PostProps } from "../components/Post";

const Address: FC = () => {
  const router = useRouter();
  const { address } = router.query;

  const [posts, setPosts] = useState<PostProps[]>(postsData);

  useEffect(() => {
    // setPosts;
  }, []);

  return (
    <>
      <Head>
        <title>{address} - Told.So</title>
        <meta name="description" content="Preserve Your Thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-semibold">{address}&apos;s Posts</h1>

      {posts.map((post) => (
        <Post
          key={post.title}
          address={post.address}
          id={post.id}
          title={post.title}
          body={post.body}
          timestamp={post.timestamp}
        />
      ))}
    </>
  );
};

export default Address;
