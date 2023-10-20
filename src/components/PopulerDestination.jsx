import React from "react";
import { useActivities } from "../hooks/useActivities";
import { MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const PopulerDestination = () => {
  const { activities } = useActivities();
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detaildestination/${id}`);
  };

  return (
    <div className="mx-16 lg:mx-32 text-white ">
      <div className="text-center font-monts mb-8">
        <h2 className="text-md">Discover the World's Favorite Places</h2>
        <h1 className="text-5xl">Populer Destination</h1>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-6 box-border mb-6 lg:mb-6">
        {activities.slice(0, 1).map((item) => (
          <button
            onClick={() => handleDetail(item.id)}
            className="w-11/12 md:w-1/2 lg:w-[69%] h-52 rounded-md transition hover:scale-x-[1.02] hover:scale-y-105"
            style={{
              background: `url(${item.imageUrls})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center ml-4 h-full">
              <h1 className="text-5xl font-art ">{item.title}</h1>
              <p className="flex items-center">
                <MdLocationOn />
                {item.city}
              </p>
            </div>
          </button>
        ))}

        {activities.slice(1, 2).map((item) => (
          <div
            className="w-11/12 md:w-1/2 lg:w-2/6 h-52 rounded-md transition hover:scale-105"
            style={{
              background: `url(${item.imageUrls})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center ml-4 h-full">
              <h1 className="text-5xl font-art ">{item.title}</h1>
              <p className="flex items-center">
                <MdLocationOn />
                {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row  gap-6">
        {activities.slice(2, 5).map((item) => (
          <div
            className="w-11/12 md:w-1/2 lg:w-2/6 h-52 rounded-md transition hover:scale-105"
            style={{
              background: `url(${item.imageUrls})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center ml-4 h-full">
              <h1 className="text-5xl font-art ">{item.title}</h1>
              <p className="flex items-center">
                <MdLocationOn />
                {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerDestination;
