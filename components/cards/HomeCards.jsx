import Link from "next/link";
import Image from "next/image";

const HomeCards = ({ btnText, name, desc, imgUrl, pathUrl }) => {
  return (
    <div className="max-w-sm bg-white mobile:my-4 rounded-lg border border-gray-200 shadow-md">
      <Link href={pathUrl}>
        <a>
          <Image
            className="rounded-t-lg"
            src={imgUrl}
            alt="house i want to buy"
            width={500}
            height={300}
          />
        </a>
      </Link>
      <div className="p-5">
        <Link href="/explore">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h5>
          </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <Link href={`${pathUrl}`}>
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-300 ease-in-out hover:scale-110 "
          >
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCards;
