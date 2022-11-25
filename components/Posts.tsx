import deployments from "@told-so/contracts/deployments.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContract } from "wagmi";

import type { ToldSo } from "@told-so/contracts/types";
import type { FC } from "react";

type PostProps = {
  address: string;
  id: number;
  title: string;
  body: string;
  media: string;
  timestamp: number;
};

export const Post: FC<PostProps> = ({
  address,
  id,
  title,
  body,
  media,
  timestamp,
}) => (
  <Link
    href={`/${address}/${id}`}
    className="card border border-white/10 max-sm:card-compact"
  >
    <div className="card-body">
      <div className="link-hover link-accent link card-title text-2xl">
        {title}
      </div>

      <span className="text-xs text-neutral-content">
        📝{" "}
        <Link href={address} className="link-hover link">
          {address}
        </Link>{" "}
        | 🕰️{" "}
        {new Date(timestamp).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </span>

      <p className="font-serif tracking-wider">{body}</p>
    </div>
  </Link>
);

type PostsProps = {
  address: string;
};

const Posts: FC<PostsProps> = ({ address }) => {
  const toldSo = useContract<ToldSo>({
    contractInterface: deployments.contracts.ToldSo.abi,
    addressOrName: deployments.contracts.ToldSo.address,
  });

  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      if (!address) return;
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
      {posts.map((post) => (
        <Post key={`${post.address} ${post.id}`} {...post} />
      ))}
    </>
  );
};

export default Posts;
