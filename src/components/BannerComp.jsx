import React from "react";
import { useBanner } from "../hooks/useBanner";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const BannerComp = () => {
  const { banner, current, nextSlide, prevSlide } = useBanner();

  return (
    <div className="relative w-full h-screen">
      <BsArrowLeftCircleFill
        className="absolute w-8 h-8 text-emerald-500 hover:text-emerald-600 left-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={prevSlide}
      />
      <BsArrowRightCircleFill
        className="absolute w-8 h-8 text-emerald-500 hover:text-emerald-600 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={nextSlide}
      />
      <div className="w-full h-screen flex justify-center items-center text-center lg:text-start lg:justify-start text-white">
        <div className="absolute font-monts z-10 -mt-24 lg:-mt-16 lg:ml-32 w-1/2 md:w-1/3">
          <h3 className="text-lg lg:text-2xl">Welcome to Voyager</h3>
          <h1 className="text-4xl lg:text-[66px] leading-[1]">
            Explore
            <br /> The World
          </h1>
          <p className="mt-3 text-sm lg:text-md">
            Discover destinations you've never visited before and experience the
            excitement of exploring new places.
          </p>
        </div>
        {banner?.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full object-cover brightness-50  ${
              index === current ? "block" : "hidden"
            }`}
            style={{
              background: `url(${item?.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerComp;
