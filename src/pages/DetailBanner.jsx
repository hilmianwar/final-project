import React from "react";
import { format } from "date-fns";
import useDetailBanner from "../hooks/useDetailBanner";

const DetailBanner = () => {
  const { banner } = useDetailBanner();

  if (!banner) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-2 lg:mx-20 mb-6">
        <h1 className="text-center font-monts text-2xl text-white">
          Detail Banner
        </h1>
        <div className="flex lg:flex-row flex-col gap-10 mt-10 w-full justify-center items-center lg:items-start">
          <div
            className="lg:h-96 h-40 w-80 lg:w-1/2 border border-neutral-700 rounded-md"
            style={{
              backgroundImage: `url(${banner?.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="md:w-3/4 lg:w-1/2 text-white text-sm">
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Id</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {banner?.id}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Name</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {banner?.name}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Image Url</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {banner?.imageUrl}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Created Ad</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {format(new Date(banner?.createdAt), "dd MMMM yyyy")}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Updated At</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {format(new Date(banner?.updatedAt), "dd MMMM yyyy")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
