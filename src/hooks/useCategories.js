import React, { useEffect, useState } from "react";
import { categoriesData } from "../utils/apis/data";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategoriesData = () => {
    categoriesData()
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return { categories };
};
