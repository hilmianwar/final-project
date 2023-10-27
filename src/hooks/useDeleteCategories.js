import { useState } from "react";
import { deleteCategoriesData } from "../utils/apis/data";

const useDeleteCategories = () => {
  const [successDelete, setSuccessDelete] = useState("");
  const [errDelete, setErrDelete] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleDeleteCategories = (id, categories, setCategories) => {
    deleteCategoriesData(id)
      .then((res) => {
        setSuccessDelete("Delete Categories success");
        setShowModalDelete(true);
        setTimeout(() => {
          setShowModalDelete(false);
          setSuccessDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
        setCategories(categories.filter((category) => category.id !== id)); //otomatis menghapus data tanpa perlu di refresh
      })
      .catch((err) => {
        setErrDelete("Error delete Categories");
        setShowModalDelete(true);
        console.log(err);
        setTimeout(() => {
          setShowModalDelete(false);
          setErrDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    handleDeleteCategories,
    successDelete,
    errDelete,
    showModalDelete,
    setShowModalDelete,
  };
};

export default useDeleteCategories;
