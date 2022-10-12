import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn, changeMessage, signUserIn } from "../slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import SyncLoader from "react-spinners/SyncLoader";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading } = useSelector((state) => state.user);
  const homeContainer = "flex flex-row items-center justify-center";

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/profile");
    }
    setTimeout(() => {
      if (isLoggedIn) {
        router.push("/profile");
      }
    }, "1000");
  }, [router, isLoggedIn]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(signUserIn(formData));
      unwrapResult(response);

      toast.success("Signed in", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);

      toast.error(`Invalid email or password`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <main className="pt-12 h-screen">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer
        pauseOnHover={false}
        transition={Zoom}
        hideProgressBar={true}
        autoClose={2000}
      />

      {isLoading && (
        <div className=" flex flex-col justify-center items-center h-full w-full fixed top-0 left-0 bg-white opacity-80">
          <SyncLoader color={"#00308F"} loading={true} size={20} />
        </div>
      )}

      <section className="flex mt-4 mb-4 flex-col items-center">
        <h1 className=" text-6xl font-semibold mb-20">Welcome Back!</h1>

        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
            className="rounded-lg outline outline-1 outline-gray-200 py-2 w-72 focus:outline-gray-800 indent-8 transition duration-300 mt-4 bg-[url('/personIcon.svg')] bg-no-repeat bg-left"
            type="text"
            placeholder="Email"
            onChange={onChange}
            value={formData.email}
            id="email"
            name="email"
          />
          <br />
          <input
            className="rounded-lg outline outline-1 outline-gray-200 py-2 w-72 focus:outline-gray-800 indent-8 transition duration-300 bg-[url('/lockIcon.svg')] bg-no-repeat bg-left"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={formData.password}
            id="password"
            name="password"
          />
          <Link href="/forgotPass">
            <span className="ml-40 text-sm pt-2 hover:cursor-pointer text-gray-400 hover:text-gray-800 transition duration-300">
              Forgot Password?
            </span>
          </Link>

          <button className="mt-8 mb-8 bg-blue-700 rounded-lg py-2 px-2 w-72 text-white hover:bg-blue-800 transition duration-500">
            Sign in
          </button>

          <span className="text-gray-500 text-xs">
            Not a user?{" "}
            <Link href="/signup">
              <span className="hover:text-gray-800 duration-300 hover:cursor-pointer underline">
                Sign up
              </span>
            </Link>
          </span>
        </form>
      </section>

      {/* <section className="flex flex-row justify-center pb-4">
        <div className=" border-b-2 w-1/4 border-gray-300 self-center "></div>
        <p className="px-4 self-center text-gray-500">or</p>
        <div className="border-b-2 w-1/4 border-gray-300 self-center"></div>
      </section>

      <section className="flex mt-4 flex-col items-center justify-center">
        <p>Sign in with</p>
        <div className="mt-6">
          <Image
            src={"/appleLogo.svg"}
            width={34}
            height={50}
            alt="google button"
            className="cursor-pointer"
          ></Image>
          <span className="mx-6"></span>
          <Image
            src={"/googleIcon.svg"}
            width={34}
            height={50}
            alt="google button"
            className="cursor-pointer"
          ></Image>
          <span className="mx-6"></span>
          <Image
            src={"/facebook.svg"}
            width={34}
            height={50}
            alt="google button"
            className="cursor-pointer"
          ></Image>
        </div>
      </section> */}
    </main>
  );
}
