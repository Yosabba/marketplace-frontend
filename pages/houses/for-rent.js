import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HouseCard from "../../components/cards/HouseCard";

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

export default function ForRent({ data = null }) {
  const [houses, setHouses] = useState(data);
  return (
    <main className="pt-12 h-screen">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex mt-4 mb-4 flex-col items-center">
        <h1 className=" text-6xl font-semibold mb-20">Places for rent</h1>
      </section>

      <section className="flex flex-row flex-wrap justify-start ml-4 gap-8">
        {houses
          .filter((house) => house.type === "rent")
          .map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
      </section>
    </main>
  );
}
