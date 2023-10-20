import React, { useEffect, useState } from "react";
import { addCategoriesData } from "../utils/apis/data";

export const useAddCategories = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showAddCategories, setShowAddCategories] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState("");

  const handleAddCategories = () => {
    addCategoriesData(name, imageUrl)
      .then((res) => {
        setSuccessMessage("Categories added successfully");
        console.log(res);
      })
      .catch((err) => {
        setErr("Error adding Categories");
        console.log(err);
      });
  };

  return {
    setName,
    setImageUrl,
    showAddCategories,
    setShowAddCategories,
    handleAddCategories,
    err,
    setErr,
    successMessage,
  };
};
