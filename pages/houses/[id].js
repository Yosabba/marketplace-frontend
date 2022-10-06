import axios from "axios";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://marketplace-backend-production-b296.up.railway.app/houses/"
  );

  const paths = data.map((house) => {
    return {
      params: { id: house.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await axios.get(
    `https://marketplace-backend-production-b296.up.railway.app/houses/${id}`
  );

  return {
    props: {
      house: data,
    },
  };
};

const HouseDetails = ({ house = null }) => {
  return (
    <div className="">
      <img src={house.image_url} alt="" />
      <h1>{house.price}</h1>
      <p>{house.furnished && 'fully furn'}</p>
      <p>{house.bedroom}</p>
      <p>{house.bathroom}</p>
      <p>{house.type}</p>
      <p>{house.description}</p>
      <p>{house.parking && 'has parking'}</p>
      <p>{house.offer && 'has offer waiting'}</p>
    </div>
  );
};

export default HouseDetails;
