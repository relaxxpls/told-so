import Head from "next/head";
import { useRouter } from "next/router";

import Posts from "../components/Posts";

import type { FC } from "react";

const Address: FC = () => {
  const router = useRouter();
  const { address } = router.query;

  if (typeof address !== "string") return null;

  return (
    <>
      <Head>
        <title>{address} - Told.So</title>
        <meta name="description" content="Preserve Your Thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-semibold">{address}&apos;s Posts</h1>

      <Posts address={address} />
    </>
  );
};

export default Address;
