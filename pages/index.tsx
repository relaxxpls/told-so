import deployments from "@told-so/contracts/deployments.json";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAccount, useContract, useSigner } from "wagmi";

import Post, { type PostProps } from "../components/Post";

import type { ToldSo } from "@told-so/contracts/types";

const Home = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const [posts, setPosts] = useState<PostProps[]>([]);

  const handleClick = () => {
    //
  };

  const toldSo = useContract<ToldSo>({
    contractInterface: deployments.contracts.ToldSo.abi,
    addressOrName: deployments.contracts.ToldSo.address,
  });

  useEffect(() => {
    const getPosts = async () => {
      if (!toldSo || !address) return;
      try {
        const myPosts = await toldSo.getPosts(address);
        setPosts(
          myPosts.map(({ title, body, media, timestamp }, id) => ({
            address,
            id,
            title,
            body,
            media,
            timestamp: timestamp.toNumber(),
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();
  }, [address, toldSo]);

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

      {posts.length && (
        <span className="mt-8 font-brand text-4xl font-semibold tracking-widest">
          My Posts
        </span>
      )}

      {posts.map((post) => (
        <Post key={`${post.address} ${post.id}`} {...post} />
      ))}
    </>
  );
};

export default Home;
