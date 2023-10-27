import React from "react";
import { format } from "date-fns";
import useDetailDestByCat from "../hooks/useDestByCategories";

const DetailDestByCat = () => {
  const { destByCat } = useDetailDestByCat();

  if (!destByCat) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-2 lg:mx-20 mb-6">
        <h1 className="text-center font-monts text-2xl text-white">
          Detail Destination
        </h1>
        <div className="flex lg:flex-row flex-col gap-10 mt-10 w-full justify-center items-center lg:items-start">
          <div
            className="lg:h-96 h-40 w-80 lg:w-1/2 border border-neutral-700 rounded-md"
            style={{
              backgroundImage: `url(${destByCat?.imageUrls})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="md:w-3/4 lg:w-1/2 text-white text-sm">
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Category Id</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.categoryId}
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
                {destByCat?.title}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Description</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.description}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Image Urls</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.imageUrls}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Price</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.price}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Price Discount</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.price_discount}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Rating</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.rating}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Total Reviews</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.total_reviews}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Facilities</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.facilities}
              </span>
            </p>

            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Address</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.address}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Province</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.province}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>City</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.city}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Location Maps</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {destByCat?.location_maps}
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
                {format(new Date(destByCat?.createdAt), "dd MMMM yyyy")}
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
                {format(new Date(destByCat?.updatedAt), "dd MMMM yyyy")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDestByCat;
