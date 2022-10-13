import Head from "next/head";
import HomeForm from "../components/forms/HomeForm";
import HomeCards from "../components/cards/HomeCards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHouse } from "../slices/userSlice";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://marketplace-backend-production-b296.up.railway.app/houses"
      );
      dispatch(addHouse(data));
    };
    getData();
  }, []);

  return (
    <main className="pb-12">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex mt-4 pb-20 flex-col items-center">
        <div className="bg-[url('../public/house-community.jpg')] bg-cover w-full h-[65vh]">
          <div className="bg-black bg-opacity-30 w-full h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="laptop:text-5xl font-bold text-white mobile:text-4xl">
                House Marketplace
              </h1>
              <p className="laptop:text-2xl mobile:text-lg text-white mb-6">
                Find your dream house in a few clicks
              </p>
              <HomeForm />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full"></div>
        </div>
      </section>

      <section className="grid grid-cols-auto-fit justify-items-center mx-10 pb-8">
        <HomeCards
          name="Rent a house"
          desc="Find a new place to live with a ton of listings and options. You won't
          find these anywhere else."
          btnText="Find Rentals"
          imgUrl="/house-2.jpg"
          pathUrl="/houses/for-rent"
        />
        <HomeCards
          name="Buy a house"
          desc="Ready for your dream home? Search for the perfect place to call your
          own."
          btnText="Browse Houses"
          imgUrl="/house-3.jpg"
          pathUrl="/houses"
        />
        <HomeCards
          name="Sell a house"
          desc="Find a new place to live with a ton of listings and options. You won't
          find these anywhere else."
          btnText="Sell a Home"
          imgUrl="/house-with-yard-sign-sale.jpg"
          pathUrl="/for-sale"
        />
      </section>
    </main>
  );
}
