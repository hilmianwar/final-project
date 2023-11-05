import React, { useEffect, useState } from "react";
import { addCategoriesData, categoriesData } from "../utils/apis/data";

export const useAddCategories = (imageUrl) => {
  const [name, setName] = useState("");
  const [showAddCategories, setShowAddCategories] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState("");
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleAddCategories = (onHide) => {
    addCategoriesData(name, imageUrl)
      .then((res) => {
        setSuccessMessage("Categories added successfully");
        setShowMassageModal(true);
        setShowAddCategories(false);
        console.log(res);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
          onHide();
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
