import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const headerWrapper = "flex justify-between items-center py-4 px-6 bg-white";

  const linkStyle =
    "mx-2 capitalize transition duration-300 ease-in-out hover:text-gray-300 text-lg";

  const btnStyle =
    "bg-[#080357] p-2 rounded-lg text-slate-200 ml-4 transition duration-500 ease-in-out hover:bg-slate-200 ";

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
        <Link href="/">
          <a className={linkStyle}>Buy</a>
        </Link>
        <Link href="/">
          <a className={linkStyle}>Rent</a>
        </Link>
        <Link href="/">
          <a className={linkStyle}>Sell</a>
        </Link>
        <Link href="/signIn">
          <button className={btnStyle}>Sign In</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
