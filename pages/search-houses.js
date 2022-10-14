import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import HouseCard from "../components/cards/HouseCard";
import { useEffect, useState } from "react";

export default function SearchedHouses() {
  const [searchParams, setSearchParams] = useState("");
  const { searchHouses } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    searchHouses.length === 0
      ? router.push("/")
      : setSearchParams(localStorage.getItem("cityState"));
  }, [searchHouses]);

  return (
    <main>
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-center text-3xl">{`Houses in ${searchParams}`}</h1>
      {searchHouses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </main>
  );
}
