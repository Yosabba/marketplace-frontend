import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HomeForm from "../components/forms/HomeForm";
import HomeCards from "../components/HomeCards";

export const getStaticProps = async () => {
  const response = await axios.get("http://localhost:5000/houses");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  const [houses, setHouses] = useState(data);

  return (
    <main>
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex mt-4 pb-20 flex-col items-center ">
        <div className="bg-[url('../public/house-community.jpg')] bg-cover w-full h-[65vh]">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-white">House Marketplace</h1>
            <p className="text-2xl text-white mb-6">
              Find your dream house in a few clicks
            </p>
            <HomeForm />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-auto-fit justify-items-center mx-10 pb-8">
        <HomeCards
          name="Rent a house"
          desc="Find a new place to live with a ton of listings and options. You won't
          find these anywhere else."
          btnText="Find Rentals"
          imgUrl="/house-2.jpg"
          pathUrl="/for_rent"
        />
        <HomeCards
          name="Buy a house"
          desc="Ready for your dream home? Search for the perfect place to call your
          own."
          btnText="Browse Houses"
          imgUrl="/house-3.jpg"
          pathUrl="/for_sale"
        />
        <HomeCards
          name="Sell a house"
          desc="Find a new place to live with a ton of listings and options. You won't
          find these anywhere else."
          btnText="Sell a Home"
          imgUrl="/house-with-yard-sign-sale.jpg"
          pathUrl="/for_sale"
        />
      </section>
    </main>
  );
}
