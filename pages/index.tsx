import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => (
  <>
    <Head>
      <title>Told So - Preserve Your Thoughts</title>
      <meta name="description" content="Preserve Your Thoughts" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="container my-16 h-screen bg-white/5">
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input-primary input w-full"
      />

      <button type="button" className="">
        Tweet
      </button>
    </main>
    <Footer />
  </>
);

export default Home;
