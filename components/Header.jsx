import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logUserIn, logUserOut } from "../slices/userSlice";
import { useRouter } from "next/router";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const headerWrapper = "flex justify-between items-center py-4 px-6 bg-white";
  const linkStyle =
    "mx-2 capitalize transition duration-300 ease-in-out hover:text-gray-600 text-lg";
  const btnStyle =
    "bg-blue-700 p-2 rounded-lg text-slate-200 ml-4 transition duration-500 ease-in-out hover:bg-blue-800 ";

  useEffect(() => {
    const user = localStorage.getItem("user");

    user !== null && dispatch(logUserIn());
  }, [isLoggedIn]);

  const handleClick = (e) => {
    e.preventDefault();

    localStorage.clear();
    router.push("/");
    dispatch(logUserOut());
  };

  return (
    <header className={headerWrapper}>
      <div>
        <Link href="/">
          <a>
            <Image src="/house.svg" alt="logo" width={40} height={40} />
          </a>
        </Link>
      </div>

      <div>
        <Link href="/houses">
          <a className={linkStyle}>Buy</a>
        </Link>
        <Link href="/houses/for-rent">
          <a className={linkStyle}>Rent</a>
        </Link>
        <Link href="/for-sale">
          <a className={linkStyle}>Sell</a>
        </Link>
        {isLoggedIn ? (
          <>
            <Link href="/profile">
              <a className={linkStyle}>My Profile</a>
            </Link>
            <a
              onClick={handleClick}
              className="bg-blue-500 rounded-xl p-2 mx-3 hover:bg-blue-600 hover:cursor-pointer"
            >
              Log Out
            </a>
          </>
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
