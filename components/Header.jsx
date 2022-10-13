import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { logUserIn, logUserOut } from "../slices/userSlice";
import { useRouter } from "next/router";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const linkStyle =
    "m-2 capitalize transition duration-300 ease-in-out hover:text-gray-600 laptop:text-lg mobile:text-3xl mobile:font-semibold mobile:p-2";
  const btnStyle =
    "bg-blue-700 p-2 rounded-lg text-slate-200 ml-4 transition duration-500 ease-in-out hover:bg-blue-800 ";

  useEffect(() => {
    const user = localStorage.getItem("user");

    user !== null && dispatch(logUserIn());
  }, [isLoggedIn]);

  const handleLogOut = (e) => {
    e.preventDefault();

    localStorage.clear();
    router.push("/");
    dispatch(logUserOut());
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    // <header className={headerWrapper}>
    //   <div>
    //     <Link href="/">
    //       <a>
    //         <Image src="/house.svg" alt="logo" width={40} height={40} />
    //       </a>
    //     </Link>
    //   </div>

    //   <div>
    //     <Link href="/houses">
    //       <a className={linkStyle}>Buy</a>
    //     </Link>
    //     <Link href="/houses/for-rent">
    //       <a className={linkStyle}>Rent</a>
    //     </Link>
    //     <Link href="/for-sale">
    //       <a className={linkStyle}>Sell</a>
    //     </Link>
    //     {isLoggedIn ? (
    //       <>
    //         <Link href="/profile">
    //           <a className={linkStyle}>My Profile</a>
    //         </Link>
    //         <a
    //           onClick={handleClick}
    //           className="bg-blue-500 rounded-xl p-2 mx-3 hover:bg-blue-600 hover:cursor-pointer"
    //         >
    //           Log Out
    //         </a>
    //       </>
    //     ) : (
    //       <Link href="/login">
    //         <a className={btnStyle}>Sign In</a>
    //       </Link>
    //     )}
    //   </div>
    <header className="bg-white border-gray-200 px-2 mobile:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg tablet:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Link href="/" className="flex items-center cursor-pointer">
          <a>
            <Image src="/house.svg" alt="House Mp" width={40} height={40} />
          </a>
        </Link>

        <div
          className={
            isClicked
              ? `h-full w-full right-0 top-0 fixed bg-white z-50`
              : `hidden w-full tablet:block tablet:w-auto`
          }
        >
          <ul className="flex flex-col justify-center items-center p-4 mt-4 tablet:flex-row tablet:mt-0 tablet:text-sm tablet:font-medium tablet:border-0 tablet:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#000000"
              className="w-6 h-6 right-0 fixed top-0 mt-4 mr-4 tablet:hidden"
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <Link href="/houses">
              <a className={linkStyle} onClick={handleClick}>
                Buy
              </a>
            </Link>

            <Link href="/houses/for-rent">
              <a className={linkStyle} onClick={handleClick}>
                Rent
              </a>
            </Link>

            <Link href="/for-sale">
              <a className={linkStyle} onClick={handleClick}>
                Sell
              </a>
            </Link>

            {isLoggedIn && (
              <Link href="/profile">
                <a className={linkStyle} onClick={handleClick}>
                  My Profile
                </a>
              </Link>
            )}
          </ul>
        </div>
        {isLoggedIn ? (
          <button
            onClick={handleLogOut}
            className="bg-blue-700 text-white rounded-xl p-2 mx-3 hover:bg-blue-600 hover:cursor-pointer"
          >
            Sign Out
          </button>
        ) : (
          <Link href="/login">
            <a className={btnStyle}>Sign In</a>
          </Link>
        )}
      </div>
    </header>


  );
};

export default Header;
