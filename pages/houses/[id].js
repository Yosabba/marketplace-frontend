import axios from "axios";
import Image from "next/image";
import BathroomSvg from "../../assets/BathroomSvg";
import BedSvg from "../../assets/BedSvg";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://marketplace-backend-production-b296.up.railway.app/houses/"
  );

  const paths = data.map((house) => {
    return {
      params: { id: `${house.id}` },
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
  function housePriceToComma(x) {
    return x.toLocaleString("en-US");
  }

  return (
    <section className="flex flex-col py-20 mobile:mx-2">
      <img
        src={house.image_url}
        alt={house.name}
        className="laptop:w-5/12 laptop:h-2/6 rounded-xl mx-auto my-0"
      />
      <div className="flex laptop:flex-row mobile:flex-col laptop:justify-evenly mobile:items-start mt-5 laptop:mx-16 mobile:mx-0">

        <div className="mx-3">
          <p className="text-3xl font-semibold">
            ${housePriceToComma(house.price)}
          </p>
        </div>

        <div className=" flex flex-col mx-3 laptop:items-center mobile:items-start justify-between mobile:mt-2 laptop:mt-0">
          <p className="text-lg">{house.house_location}</p>

          <div className="flex laptop:flex-row mobile:flex-row items-center mobile:items-start mx-3 mobile:mx-0 laptop:mt-2 mobile:mt-0">
            <div className="inline-flex items-center mr-3">
              <BedSvg />
              <p className="ml-2">{house.bedroom} Beds</p>
            </div>

            <div className="inline-flex items-center">
              <BathroomSvg />
              <p className="ml-2">{house.bathroom} Baths</p>
            </div>
          </div>
        </div>


      </div>

      <div className="flex flex-col laptop:ml-[35rem] mobile:ml-2 mt-20">
        <h1 className="text-2xl font-medium text-start">Description</h1>
        <p className="text-start mt-5">{house.description}</p>
      </div>

      <div className="flex flex-col laptop:ml-[35rem] mobile:ml-2 mt-20 laptop:w-5/12 mobile:w-12/12 border-2 border-slate-100 rounded-lg p-4">
        <h1 className="text-2xl mb-8">Home Highlights</h1>
        <div className="inline-flex flex-wrap">
          {house.parking && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "",
                  msfilter: "",
                }}
              >
                <path d="M13.5 3H5v18h4v-5h4.5c3.584 0 6.5-2.916 6.5-6.5S17.084 3 13.5 3zm0 9H9V7h4.5C14.879 7 16 8.121 16 9.5S14.879 12 13.5 12z" />
              </svg>

              <p className="mr-4 ml-1">Parking</p>
            </>
          )}
          {house.furnished && (
            <>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.25 10.75C20.7125 10.75 21.9084 11.8917 21.995 13.3325L22 13.5V16.25C22 17.1682 21.2929 17.9212 20.3935 17.9942L20.25 18H3.75C2.83183 18 2.07881 17.2929 2.0058 16.3935L2 16.25V13.5C2 11.9812 3.23122 10.75 4.75 10.75C6.03942 10.75 7.12158 11.6374 7.41901 12.8348L7.45466 13H16.5453L16.581 12.8348C16.8784 11.6374 17.9606 10.75 19.25 10.75ZM5.75 6H18.25C19.1682 6 19.9212 6.70711 19.9942 7.60647L20 7.75L20.0005 9.82512C19.758 9.77586 19.507 9.75 19.25 9.75C17.7321 9.75 16.3969 10.659 15.812 12H8.18809C7.60512 10.6636 6.27271 9.75 4.75 9.75C4.49266 9.75 4.24138 9.77592 3.99862 9.82529L4 7.75C4 6.83183 4.70711 6.07881 5.60647 6.0058L5.75 6Z"
                  fill="#212121"
                />
              </svg>

              <p className="mr-4 ml-1">Furnished</p>
            </>
          )}
          {house.offer && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="mr-4 ml-1">Offers</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HouseDetails;
