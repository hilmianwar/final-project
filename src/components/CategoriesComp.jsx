import React from "react";
import { useCategories } from "../hooks/useCategories";

const CategoriesComp = () => {
  const { categories } = useCategories();
  return (
    <div>
      <div className="flex justify-center items-center text-white w-full relative  lg:h-32  bottom-0 z-10 lg:pr-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 -mt-64 lg:-mt-96 gap-6 h-full w-full md:px-20 lg:pl-32 lg:px-0">
          {/* <div className="grid md:grid-cols-3 lg:grid-cols-6 -mt-24 gap-6 h-full w-full md:px-20 lg:pl-32 lg:px-0"> */}
          {categories.slice(2, 6).map((item, index) => (
            <div
              className={`h-40 w-2/3 md:w-full mx-auto rounded-md hover:scale-105 transition flex items-end 
              }`}
              style={{
                background: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...(index === categories.slice(2, 6).length - 1
                  ? {
                      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.imageUrl})`,
                    }
                  : {}),
              }}
            >
              <h2 className="text-4xl pl-3 pb-2 font-art">
                {index === categories.slice(2, 6).length - 1 ? null : item.name}
              </h2>
              {index === categories.slice(2, 6).length - 1 && (
                <div className="flex justify-center items-center w-full h-full">
                  <button className=" bg-emerald-500 bg-opacity-60 hover:bg-emerald-600 rounded-md p-2 text-lg ">
                    See All Categories
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesComp;
