import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


export const getStaticProps = async () => {
  const response = await axios.get(
    "https://marketplace-backend-production-b296.up.railway.app/houses"
  );
  const data = response.data;

  return {
    props: {
      data,
    },
  };
};

export default function ForSale({ data = null }) {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    isLoggedIn ? localStorage.getItem("user") : router.push("/login");
  }, [isLoggedIn]);

  return (
    <main className="pt-12 h-screen">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex mt-4 mb-4 flex-col items-center">
        <h1 className=" text-6xl font-semibold mb-20">For Sale Page</h1>
      </section>
    </main>
  );
}
