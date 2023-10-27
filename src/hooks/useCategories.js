import React, { useEffect, useState } from "react";
import { categoriesData } from "../utils/apis/data";
import { useNavigate } from "react-router";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [errCategories, setErrCategories] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getCategoriesData = () => {
    categoriesData()
      .then((res) => {
        setCategories(res.data.data);
        setIsLoading(false); //matikan isLoading ketika datanya sudah dapat
      })
      .catch((err) => {
        setErrCategories(err.message);
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return { categories, setCategories, navigate, errCategories, isLoading };
};
