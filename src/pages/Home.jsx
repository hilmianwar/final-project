import React from "react";
import Header from "../components/Header";
import BannerComp from "../components/BannerComp";
import WhyUs from "../components/WhyUs";
import PopulerDestination from "../components/PopulerDestination";
import Product from "../components/Promo";
import Footer from "../components/Footer";
import CategoriesComp from "../components/CategoriesComp";

const Home = () => {
  return (
    <div className="">
      <Header />
      <BannerComp />
      <CategoriesComp />
      <WhyUs />
      <PopulerDestination />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
