import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useBanner } from "../hooks/useBanner";
import { MdLocationOn } from "react-icons/md";
import { useDestination } from "../hooks/useDestination";

const Destination = () => {
  const { banner } = useBanner();
  const { destination, navigate, isLoading, errDestination } = useDestination();

  if (isLoading) {
    return <div className="text-white">Loading...</div>; // Menampilkan pesan "Loading..." ketika isLoading adalah true
  }

  if (errDestination) {
    return <div className="text-white">{errDestination}</div>; //menampilkan pesan error ketika errDestination adalah true
  }

  return (
    <div>
      <Header />
      <div>
        <h1 className="flex justify-center items-center h-96 w-full z-10 text-white absolute font-monts text-5xl">
          Destination
        </h1>
        <div className="h-96 w-full brightness-50">
          <img
            src={banner[1]?.imageUrl}
            alt=""
            className="h-96 w-full object-cover"
          />
        </div>
        <div>
          <div className="grid gap-6 py-10 mx-16 lg:mx-32 md:grid-cols-2 lg:grid-cols-3 ">
            {destination.map((item) => (
              <div
                key={item?.id}
                onClick={() => navigate(`/detaildestination/${item?.id}`)}
                className="h-52 rounded-md transition hover:scale-105"
                style={{
                  background: `url(${item?.imageUrls})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col justify-center ml-4 h-full text-white">
                  <h1 className="text-5xl font-art ">{item?.title}</h1>
                  <p className="flex items-center">
                    <MdLocationOn />
                    {item?.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destination;
