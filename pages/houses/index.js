import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import HouseCard from "../../components/cards/HouseCard";
import React, { useState } from "react";

export const getStaticProps = async () => {
  const response = await axios.get(
    "https://marketplace-backend-production-b296.up.railway.app/houses/"
  );
  const data = response?.data;

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  const [houses, setHouses] = useState(data);

  return (
    <main className="pt-12 mb-20">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex mt-4 mb-4 flex-col items-center">
        <h1 className=" text-6xl font-semibold mb-20">Homes For Sale</h1>
      </section>

      <section className="flex flex-row flex-wrap justify-start ml-4 gap-8">
        {houses
          .filter((house) => house.type === "own")
          .map((house) => (
            <Link key={house.id} href={`/houses/${house.id}`}>
              <a>
                <HouseCard house={house} />
              </a>
            </Link>
          ))}
      </section>
    </main>
  );
}
