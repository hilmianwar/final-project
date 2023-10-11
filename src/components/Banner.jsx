import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { useBanner } from "../hooks/useBanner";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useCategories } from "../hooks/useCategories";

const Banner = () => {
  const { banner } = useBanner();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    current === banner.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const prevSlide = () => {
    current === 0 ? setCurrent(banner.length - 1) : setCurrent(current - 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik
  //   return () => clearInterval(interval);
  // }, []);

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
          <h3 className="text-lg lg:text-2xl">Welcome to Halo</h3>
          <h1 className="text-4xl lg:text-[66px] leading-[1]">
            Explore
            <br /> The World
          </h1>
          <p className="mt-3 text-sm lg:text-md">
            Discover destinations you've never visited before and experience the
            excitement of exploring new places.
          </p>
        </div>
        <Categories />
        {banner.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            alt=""
            className={`w-full h-full object-cover brightness-50  ${
              index === current ? "block" : "hidden"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
