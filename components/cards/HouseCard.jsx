const HouseCard = ({house}) => {
  return (
    <section className="flex flex-col justify-center items-center border-2 border-gray-100 rounded-lg transition duration-500 ease-in-out hover:shadow-md cursor-pointer m-8">
      <img src={house.image_url} alt="" />
      <h1>${house.price}</h1>
      <p>Bedrooms {house.bedroom}</p>
      <p>Bathrooms {house.bathroom}</p>

      <h1>{house.house_location}</h1>
      <h1>{house._description}</h1>
      <h1>Parking: {house.parking ? "Yes" : "No"}</h1>
      <h1>Furnished: {house.furnished ? "Yes" : "No"}</h1>

      <h1>{house._type}</h1>
    </section>
  );
};

export default HouseCard;
