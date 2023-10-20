import { useState } from "react";
import { deleteCategoriesData } from "../utils/apis/data";

const useDeleteCategories = () => {
  const [successDelete, setSuccessDelete] = useState("");
  const [errDelete, setErrDelete] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleDeleteCategories = (id, categories, setCategories) => {
    deleteCategoriesData(id)
      .then((res) => {
        setSuccessDelete("delete Categories succes");
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          setSuccessDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
        setCategories(categories.filter((category) => category.id !== id)); //otomatis menghapus data tanpa perlu di refresh
      })
      .catch((err) => {
        setErrDelete("Error delete Categories");
        setShowModal(true);
        console.log(err);
        setTimeout(() => {
          setShowModal(false);
          setErrDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    handleDeleteCategories,
    successDelete,
    errDelete,
    showModal,
    setShowModal,
  };
};

export default useDeleteCategories;
