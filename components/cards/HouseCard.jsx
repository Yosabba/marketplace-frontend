import Image from "next/image";

const HouseCard = ({ house }) => {
  function housePriceToComma(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section className="flex flex-col border-2 border-gray-100 rounded-lg transition duration-500 ease-in-out hover:shadow-md cursor-pointer w-96 min-h-[30vh] p-6">
      {/* <Image src={house.image_url} alt="image of the house property" width={300} height={300} className="pb-5" /> */}
      <img
        src={house.image_url}
        alt="image of the house property"
        className="rounded-xl hover:scale-105 py-2 transition duration-500 ease-in-out w-full "
      />
      <h1 className=" font-bold text-lg text-left ">
        ${housePriceToComma(house.price)}
      </h1>
      {/* zoom on image when hovered */}

      <div className="flex flex-row">
        <div class="inline-flex flex-row items-start justify-center rounded-md">
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 rounded-l-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
            >
              <path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z" />
            </svg>
            {house.bedroom} bd
          </button>
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 rounded-l-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
            >
              <path d="M21 10H7V7.113c0-.997.678-1.923 1.661-2.085A2.003 2.003 0 0 1 11 7h2a4.003 4.003 0 0 0-4.398-3.98C6.523 3.222 5 5.089 5 7.178V10H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1z" />
            </svg>
            {house.bathroom} ba
          </button>
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 rounded-l-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
            >
              <circle cx={12} cy={12} r={4} />
              <path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
            </svg>
            {house.house_location}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HouseCard;
