import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import Forms from "../components/Forms";

export default function Home() {
  const [data, setData] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const homeContainer = "flex flex-row items-center justify-center";

  useEffect(() => {
    if (isUserLoggedIn) {
      router.push("/explore");
    }

    getData();
  }, [router, isUserLoggedIn]);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/cars");
    setData(response.data);
    console.log(response.data);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      toast.success("Signed in", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setIsUserLoggedIn(true);

      setFormData({
        email: "",
        password: "",
      });
    } catch ({ message }) {
      console.log(`${message}`);

      toast.error("Incorrect email or password", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <main className="pt-12">
      <Head>
        <title>House Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer
        pauseOnHover={false}
        transition={Zoom}
        hideProgressBar={true}
      />

      <section className="flex mt-4 mb-4 flex-col items-center">
        <h1 className=" text-6xl font-semibold mb-20">Welcome Back!</h1>

        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
            className="rounded-lg outline outline-1 outline-gray-200 py-2 w-72 focus:outline-gray-800 indent-8 transition duration-300 mt-4 bg-[url('/personIcon.svg')] bg-no-repeat bg-left"
            type="text"
            placeholder="Username or Email"
            onChange={onChange}
            value={formData.email}
            id="email"
          />
          <br />
          <input
            className="rounded-lg outline outline-1 outline-gray-200 py-2 w-72 focus:outline-gray-800 indent-8 transition duration-300 bg-[url('/lockIcon.svg')] bg-no-repeat bg-left"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={formData.password}
            id="password"
          />
          <Link href={"/forgotPassword"}>
            <span className="ml-40 text-sm pt-2 hover:cursor-pointer text-gray-400 hover:text-gray-800 transition duration-300">
              Forgot Password?
            </span>
          </Link>

          <button className="mt-8 mb-8 bg-black rounded-lg py-2 px-2 w-72 text-white hover:bg-gray-800 transition duration-500">
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
      <Forms />
    </main>
  );
}
