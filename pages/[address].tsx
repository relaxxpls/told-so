import Head from "next/head";
import { useRouter } from "next/router";
import { type FC, useEffect, useState } from "react";

import postsData from "../assets/data/posts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Post, { type PostProps } from "../components/Post";

const Address: FC = () => {
  const router = useRouter();
  const { address } = router.query;

  const [posts, setPosts] = useState<PostProps[]>(postsData);

  useEffect(() => {
    // setPosts;
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-auto">
      <Head>
        <title>{address} - Told So</title>
        <meta name="description" content="Preserve Your Thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container flex flex-1 flex-col items-center gap-4 py-6">
        <h1 className="text-2xl font-semibold">{address}&apos;s Posts</h1>

        {posts.map((post) => (
          <Post
            key={post.title}
            address={post.address}
            title={post.title}
            body={post.body}
            timestamp={post.timestamp}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Address;
