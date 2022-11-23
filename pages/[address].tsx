import deployments from "@told-so/contracts/deployments.json";
import Head from "next/head";
import { useRouter } from "next/router";
import { type FC, useEffect, useState } from "react";
import { useContract } from "wagmi";

import Post, { type PostProps } from "../components/Post";

import type { ToldSo } from "@told-so/contracts/types";

const Address: FC = () => {
  const router = useRouter();
  const { address } = router.query;

  const [posts, setPosts] = useState<PostProps[]>([]);

  const toldSo = useContract<ToldSo>({
    contractInterface: deployments.contracts.ToldSo.abi,
    addressOrName: deployments.contracts.ToldSo.address,
  });

  useEffect(() => {
    const getPosts = async () => {
      if (!toldSo) return;
      if (typeof address !== "string") return;

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
        <title>{address} - Told.So</title>
        <meta name="description" content="Preserve Your Thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-semibold">{address}&apos;s Posts</h1>

      {posts.map((post) => (
        <Post key={`${post.address} ${post.id}`} {...post} />
      ))}
    </>
  );
};

export default Address;
