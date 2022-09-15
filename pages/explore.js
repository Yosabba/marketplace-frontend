import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await axios.get("http://localhost:5000/houses");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
};

export default function Explore() {
  return (
    <main className="pt-12">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex mt-4 mb-4 flex-col items-center">
        <h1 className=" text-6xl font-semibold mb-20">Explore Page</h1>

        <div>random text</div>
      </section>
    </main>
  );
}
