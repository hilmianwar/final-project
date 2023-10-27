import React from "react";
import { useDestination } from "../hooks/useDestination";
import { MdLocationOn } from "react-icons/md";

const PopulerDestination = () => {
  const { destination, navigate } = useDestination();

  return (
    <div className="mx-16 lg:mx-32 text-white ">
      <div className="text-center font-monts mb-8">
        <h2 className="text-md">Discover the World's Favorite Places</h2>
        <h1 className="text-5xl">Populer Destination</h1>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-6 box-border mb-6 lg:mb-6">
        <button
          onClick={() => navigate(`/detaildestination/${destination[2]?.id}`)}
          className="w-11/12 md:w-1/2 lg:w-[69%] h-52 rounded-md transition hover:scale-x-[1.02] hover:scale-y-105"
          style={{
            backgroundImage: `url(${destination[2]?.imageUrls})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="flex flex-col justify-center items-start ml-4 h-full">
            <h1 className="text-5xl font-art ">{destination[0]?.title}</h1>
            <p className="flex items-center">
              <MdLocationOn />
              {destination[0]?.city}
            </p>
          </div>
        </button>

        <button
          onClick={() => navigate(`/detaildestination/${destination[1]?.id}`)}
          className="w-11/12 md:w-1/2 lg:w-2/6 h-52 rounded-md transition hover:scale-105"
          style={{
            backgroundImage: `url(${destination[1]?.imageUrls})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-center items-start ml-4 h-full">
            <h1 className="text-5xl font-art ">{destination[1]?.title}</h1>
            <p className="flex items-center">
              <MdLocationOn />
              {destination[1]?.city}
            </p>
          </div>
        </button>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row  gap-6">
        {destination?.slice(2, 5)?.map((item) => (
          <button
            onClick={() => navigate(`/detaildestination/${item.id}`)}
            className="w-11/12 md:w-1/2 lg:w-2/6 h-52 rounded-md transition hover:scale-105"
            style={{
              backgroundImage: `url(${item?.imageUrls})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center ml-4 h-full">
              <h1 className="text-5xl font-art ">{item?.title}</h1>
              <p className="flex items-center">
                <MdLocationOn />
                {item?.city}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopulerDestination;
