import Image from "next/image";
import LocationSvg from "../../assets/LocationSvg";
import BathroomSvg from "../../assets/BathroomSvg";
import BedSvg from "../../assets/BedSvg";

const HouseCard = ({ house }) => {
  function housePriceToComma(x) {
    return x.toLocaleString("en-US");
  }

  return (
    <section className="flex flex-col rounded-lg transition duration-500 ease-in-out cursor-pointer w-96 min-h-[30vh] p-6">
      <Image
        src={house.image_url}
        alt="image of the house property"
        width={300}
        height={300}
        className="rounded-xl hover:scale-125 hover:rounded-xl py-2 transition duration-500 ease-in-out w-full mb-20"
      />
      <h1 className=" mt-5 font-bold text-lg text-left ">
        ${housePriceToComma(house.price)}
      </h1>
      {/* zoom on image when hovered */}

      <div className="flex flex-row">
        <div className="inline-flex flex-row items-start justify-center rounded-md">
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 laptop:text-sm mobile:text-xs font-medium text-gray-900 rounded-l-lg"
          >
            <BedSvg />
            {house.bedroom} bd
          </button>
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 rounded-l-lg"
          >
            <BathroomSvg />
            {house.bathroom} ba
          </button>
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 rounded-l-lg"
          >
            <LocationSvg />
            {house.house_location}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HouseCard;
