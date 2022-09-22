const HouseCard = ({ house }) => {
  function housePriceToComma(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section className="flex flex-col border-2 border-gray-100 rounded-lg transition duration-500 ease-in-out hover:shadow-md cursor-pointer m-8">
      <img src={house.image_url} alt="image of the house property" />
      <h1 className=" font-bold text-lg text-left ">${housePriceToComma(house.price)}</h1>

      <div className="flex flex-row">
        <p className="text-gray-500 capitalize text-sm ">{`bd ${house.bedroom} | ba ${house.bathroom} | ${house.house_location}`}</p>
      </div>
    </section>
  );
};

export default HouseCard;
