import React from "react";
import { format } from "date-fns";
import useDetailPromo from "../hooks/useDetailPromo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router";

const DetailPromo = () => {
  const { promo } = useDetailPromo();
  const location = useLocation();

  if (!promo) {
    return <div>Loading...</div>;
  }

  const isDashboardDestination = location.pathname.includes(
    "/dashboard/promo/detail/"
  );
  return (
    <div>
      {!isDashboardDestination && <Header />}
      <div
        className={`flex flex-col justify-center items-center  mb-6 py-10  ${
          isDashboardDestination ? "mx-2 lg:mx-20 pt-2" : "mx-2 lg:mx-32 pt-32"
        }`}
      >
        <h1 className="text-center font-monts text-2xl text-white">
          Detail Promo
        </h1>
        <div className="flex lg:flex-row flex-col gap-10 mt-10 w-full justify-center items-center lg:items-start">
          <div
            className="lg:h-96 h-40 w-80 lg:w-1/2 border border-neutral-700 rounded-md"
            style={{
              backgroundImage: `url(${promo?.imageUrl})`,
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
                {promo?.id}
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
                {promo?.name}
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
                {promo?.description}
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
                {promo?.imageUrl}
              </span>
            </p>

            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Term Condition</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {promo?.terms_condition}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Promo Code</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {promo?.promo_code}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Promo disc Price</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {promo?.promo_discount_price}
              </span>
            </p>
            <p className="flex mb-2">
              <span className="font-semibold w-2/5 flex justify-between">
                <span>Min Claim Price</span> <span>: </span>
              </span>
              <span
                className="w-full pl-2 text-justify"
                style={{ wordBreak: "break-word" }}
              >
                {promo?.minimum_claim_price}
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
                {format(new Date(promo?.createdAt), "dd MMMM yyyy")}
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
                {format(new Date(promo?.updatedAt), "dd MMMM yyyy")}
              </span>
            </p>
          </div>
        </div>
      </div>
      {!isDashboardDestination && <Footer />}
    </div>
  );
};

export default DetailPromo;
