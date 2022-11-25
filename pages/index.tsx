import deployments from "@told-so/contracts/deployments.json";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useAccount, useContract, useSigner } from "wagmi";

import Posts from "../components/Posts";

import type { ToldSo } from "@told-so/contracts/types";

type FormValues = {
  title: string;
  body?: string;
  media?: string;
};

const Home = () => {
  const toldSo = useContract<ToldSo>({
    contractInterface: deployments.contracts.ToldSo.abi,
    addressOrName: deployments.contracts.ToldSo.address,
  });
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const { register, handleSubmit, formState } = useForm<FormValues>();

  const createPost = async (data: FormValues) => {
    if (!signer) throw Error("Connect your wallet to create a post");
    const tx = await toldSo
      .connect(signer)
      .createPost(data.title, data.body ?? "", data.media ?? "");
    await tx.wait();
  };

  if (!address) return null;

  return (
    <>
      <Head>
        <title>Told.So - Preserve Your Thoughts</title>
        <meta name="description" content="Preserve Your Thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={handleSubmit(createPost)} className="space-y-4">
        <input
          type="text"
          className="input w-full border-b-white/10 bg-transparent font-serif text-2xl tracking-wider"
          placeholder="What's on your mind?"
          {...register("body")}
        />
        <textarea
          className="textarea w-full border-b-white/10 bg-transparent font-serif text-lg tracking-wider"
          placeholder="Talk about it..."
          rows={5}
          {...register("body")}
        />
        {formState.errors.body && (
          <span className="label text-red-400">
            {formState.errors.body.message}
          </span>
        )}

        <button type="submit" className="btn-primary btn self-end">
          Post 🚀
        </button>
      </form>

      {address ? (
        <>
          <span className="mt-8 font-brand text-4xl font-semibold tracking-widest">
            My Posts
          </span>
          <Posts address={address} />
        </>
      ) : null}
    </>
  );
};

export default Home;
