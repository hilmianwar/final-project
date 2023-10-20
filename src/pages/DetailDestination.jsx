import React from "react";
import useDetailDestination from "../hooks/useDetailDestination";

const DetailDestination = () => {
  const { destination } = useDetailDestination();
  console.log(destination);
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className="text-center font-monts text-5xl text-white">Detail</h1>
        <div className="flex lg:flex-row gap-10 mt-10">
          <div
            className="h-96 w-80 border"
            style={{
              background: `url(${destination?.imageUrls})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="h-96 w-80 border text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailDestination;
