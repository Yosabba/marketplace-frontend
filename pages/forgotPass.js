import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      toast.success("Password reset email sent", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (error) {
      toast.error("An Error Occurred", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <main className="pt-28">
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        pauseOnHover={false}
        transition={Zoom}
        hideProgressBar={true}
      />

      <div className=" flex flex-col items-center">
        <div className="bg-blue-100 rounded-full h-8 w-8 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
          </svg>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-2">Forgot Password?</h1>
      <p className="text-gray-400 mb-10 text-center">
        Don't worry we will send you a password reset
      </p>

      <section className="flex flex-col items-center justify-center">
        {/*  */}
        <form className="w-full max-w-lg" onSubmit={resetPassword}>
          <div className="flex flex-col items-center">
            <input
              className="shadow border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col items-center py-4">
            <button
              type="button"
              className="text-white transition duration-500 ease-in-out bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-6 w-80"
            >
              Reset Password
            </button>

            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#a5a7aa"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
              <Link href="/signIn">
                <a className="text-gray-400 ml-2 hover:text-black transition duration-300 ease-in-out">
                  Back to Login
                </a>
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
