import Head from "next/head";
import houseCard from "../components/cards/HouseCard";
import { useSelector } from "react-redux";
import HouseCard from "../components/cards/HouseCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Profile() {
  const { allHouses, isLoggedIn } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    !isLoggedIn ? router.push("/login") : setName(localStorage.getItem("user"));
    !isLoggedIn
      ? router.push("/login")
      : setEmail(localStorage.getItem("email"));
  }, [isLoggedIn]);

  const personalDetailClass = "flex flex-row justify-between items-center mb-3";
  return (
    <main className="pb-12 flex flex-col justify-between">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className=" mx-3 my-8 ">
        <div className="flex flex-row justify-between gap-3 flex-wrap mb-20">
          <h1 className=" text-4xl font-bold ">My Profile</h1>
        </div>

        <div className=" laptop:w-3/12 ">
          <div className={personalDetailClass}>
            <p className="capitalize text-slate-600">personal details</p>
            <p className="text-sm text-blue-700 font-bold hover:cursor-pointer">
              change
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-3 mb-20">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-3 mb-20 flex flex-row laptop:w-3/12 justify-between hover:cursor-pointer hover:bg-gray-200 transition duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <Link href="for-sale">
            <p className=" capitalize font-semibold ">sell or rent your home</p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </section>
      <h1 className="text-xl font-bold m-6">Your Listings</h1>
      <section className=" flex flex-col flex-wrap">
        {allHouses.map((house) => {
          return (
            <div
              key={house.id}
              className=" laptop:inline-flex laptop:justify-between laptop:items-center laptop:mr-24 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center"
            >
              <HouseCard house={house} />
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-6 h-6 hover:cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          );
        })}
      </section>
    </main>
  );
}
