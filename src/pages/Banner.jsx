import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useBanner } from "../hooks/useBanner";

const Banner = () => {
  const { banner } = useBanner();
  console.log(banner);

  return (
    <div>
      <div>
        <div className="grid gap-6 py-10 mx-4 lg:mx-10 md:grid-cols-2 lg:grid-cols-3">
          {banner.map((item) => (
            <div
              className="flex items-center justify-center text-white  h-52 rounded-md transition hover:scale-105"
              style={{
                background: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-4xl pl-3 pb-2 font-art">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
