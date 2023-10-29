import React, { useEffect, useState } from "react";
import { addCategoriesData, categoriesData } from "../utils/apis/data";
import { useCategories } from "./useCategories";

export const useAddCategories = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showAddCategories, setShowAddCategories] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState("");
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleAddCategories = () => {
    addCategoriesData(name, imageUrl)
      .then((res) => {
        setSuccessMessage("Categories added successfully");
        setShowMassageModal(true);
        setShowAddCategories(false);
        console.log(res);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
        }, 2000); //modal disembunyikan setelah 2 detik
        console.log(res);
      })
      .catch((err) => {
        setErr("Error adding Categories");
        setShowMassageModal(true);
        console.log(err);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
        }, 2000); //modal disembunyikan setelah 2 detik
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
    setSuccessMessage,
    showMessageModal,
    setShowMassageModal,
  };
};
