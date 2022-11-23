import Head from "next/head";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";

import postsData from "../assets/data/posts";
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
    <>
      <Head>
        <title>Told.So - Preserve Your Thoughts</title>
        <meta name="description" content="Preserve Your Thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <textarea
        className="textarea w-full border border-white/10 bg-transparent font-serif text-xl tracking-wider"
        placeholder="What's on your mind?"
        rows={5}
      />

      <button
        type="button"
        className="btn-primary btn self-end"
        onClick={handleClick}
      >
        Post 🚀
      </button>

      <span className="mt-8 font-brand text-4xl font-semibold tracking-widest">
        My Posts
      </span>
      {posts.map((post) => (
        <Post
          key={post.title}
          id={post.id}
          address={post.address}
          title={post.title}
          body={post.body}
          timestamp={post.timestamp}
        />
      ))}
    </>
  );
};

export default Home;
