import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useBanner } from "../hooks/useBanner";
import { useCategories } from "../hooks/useCategories";

const Categories = () => {
  const { banner } = useBanner();
  const { categories, navigate, isLoading, errCategories } = useCategories();

  if (isLoading) {
    return <div className="text-white">Loading...</div>; // Menampilkan pesan "Loading..." ketika isLoading adalah true
  }

  if (errCategories) {
    return <div className="text-white">{errCategories}</div>; //menampilkan pesan error ketika errCategories adalah true
  }

  return (
    <div>
      <Header />
      <div>
        <div>
          <h1 className="flex justify-center items-center h-96 w-full z-10 text-white absolute font-monts text-5xl">
            Categories
          </h1>
          <div className="h-96 w-full brightness-50">
            <img
              src={banner[0]?.imageUrl}
              alt=""
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="grid gap-6 py-10 mx-16 lg:mx-32 md:grid-cols-2 lg:grid-cols-3">
            {categories?.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(`/destinationbycategories/${item?.id}`)}
                className="flex items-center justify-center text-white  h-52 rounded-md transition hover:scale-105"
                style={{
                  background: `url(${item?.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-4xl pl-3 pb-2 font-art">{item?.name}</h2>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
