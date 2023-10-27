import React from "react";
import BannerComp from "./BannerComp";
import CategoriesComp from "./CategoriesComp";
import WhyUs from "./WhyUs";
import PopulerDestination from "./PopulerDestination";
import Product from "./Promo";

const Main = () => {
  return (
    <div>
      <BannerComp />
      <CategoriesComp />
      <WhyUs />
      <PopulerDestination />
      <Product />
    </div>
  );
};

export default Main;
