import Image from "next/image";

const HouseCard = ({ house }) => {
  function housePriceToComma(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section className="flex flex-col border-2 border-gray-100 rounded-lg transition duration-500 ease-in-out hover:shadow-md cursor-pointer w-96 min-h-[30vh] p-6">
      {/* <Image src={house.image_url} alt="image of the house property" width={300} height={300} className="pb-5" /> */}
      <img src={house.image_url} alt="image of the house property" />
      <h1 className=" font-bold text-lg text-left ">
        ${housePriceToComma(house.price)}
      </h1>

      <div className="flex flex-row">
        <p className="text-gray-500 text-sm font-light ">{`${house.bedroom} bd  | ${house.bathroom} ba  | ${house.house_location}`}</p>
      </div>
    </section>
  );
};

export default HouseCard;
