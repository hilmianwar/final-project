import React from "react";
import { BsMap, BsHeartPulse } from "react-icons/bs";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { useCategories } from "../hooks/useCategories";
const WhyUs = () => {
  const { categories } = useCategories();

  return (
    <div className="text-white text-sm relative font-monts flex flex-col justify-center items-center my-10 mx-16 mt-20 lg:-mt-20 lg:mx-32">
      <div className="text-center mb-8">
        <h2 className="text-md">What Makes Us Different</h2>
        {/* <h2 className="text-md">WHAT MAKES US DIFFERENT</h2> */}
        <h1 className="text-5xl">Why Voyager</h1>
      </div>
      <div className="lg:flex">
        <div className="flex justify-center items-center mb-8 lg:w-1/3 lg:order-2 lg:-mt-56">
          {categories.slice(2, 3).map((item) => (
            <div
              className="h-80 w-64 rounded-md brightness-75"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>

        <div className="text-center mb-8 lg:text-start lg:mt-4 lg:w-1/3 lg:order-3 lg:-ml-1">
          <h1 className="text-xl font-semibold mb-4">
            We are a travel company based in Dieng, founded out of a love for
            the beauty of God's creation.
          </h1>
          <p>
            We are here to make your vacations more memorable and unforgettable,
            always working with passion to promote Indonesian tourism.
          </p>
        </div>

        <div className="text-center lg:w-1/3 lg:mt-4 lg:order-1 ">
          <div className="flex flex-col justify-center items-center mb-8 lg:ml-1 lg:w-72">
            <div className="flex justify-center items-center w-10 h-10 rounded-[50%] border border-white mb-2">
              <BsMap />
            </div>
            <h1 className="text-lg mb-2 font-semibold">
              Unforgettable Experience
            </h1>
            <p>
              Making your journey fully colorful, and we are here to accompany
              every step you take.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-8 lg:ml-20 lg:w-72">
            <div className="flex justify-center items-center w-10 h-10 rounded-[50%] border border-white mb-2">
              <BsHeartPulse />
            </div>
            <h1 className="text-lg mb-2 font-semibold">Positive Impact</h1>
            <p>
              Responsible and Sustainable Travel Experience. Every journey is
              designed with a focus on a positive impact on the local community
              and the environment.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-8 lg:ml-[400px] lg:w-72">
            <div className="flex justify-center items-center w-10 h-10 rounded-[50%] border border-white mb-2">
              <GiEarthAsiaOceania />
            </div>
            <h1 className="text-lg mb-2 font-semibold">
              Justice and Transparency
            </h1>
            <p>
              An open and competitive pricing structure that ensures more money
              is directed to the places in need at the travel destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
