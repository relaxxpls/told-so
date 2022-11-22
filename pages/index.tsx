import Head from "next/head";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";

import postsData from "../assets/data/posts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Post, { type PostProps } from "../components/Post";

const Home = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const [posts, setPosts] = useState<PostProps[]>(postsData);

  const handleClick = () => {
    //
  };

  useEffect(() => {
    const getPosts = () => {
      // const posts =
    };

    getPosts();
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-auto">
      <Head>
        <title>Told So - Preserve Your Thoughts</title>
        <meta name="description" content="Preserve Your Thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container flex flex-1 flex-col gap-12 py-6">
        <div className="flex flex-col items-end gap-4">
          <textarea
            className="textarea w-full border border-white/10 bg-transparent font-serif text-xl tracking-wider"
            placeholder="What's on your mind?"
            rows={5}
          />

          <button
            type="button"
            className="btn-success btn"
            onClick={handleClick}
          >
            Post 🚀
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-2xl font-semibold">My Posts</span>
          {posts.map((post) => (
            <Post
              key={post.title}
              address={post.address}
              title={post.title}
              body={post.body}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
