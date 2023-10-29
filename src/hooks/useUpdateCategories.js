import { useState } from "react";
import { updateCategoriesData } from "../utils/apis/data";

const useUpdateCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdateCategories, setShowUpdateCategories] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);
  const [editCategoriesId, setEditCategoriesId] = useState(null);

  const handleUpdateCategories = (id) => {
    updateCategoriesData(id, name, imageUrl)
      .then((res) => {
        setSuccessUpdate("Update Categories success");
        setShowMassageModal(true);
        setShowUpdateCategories(false);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessUpdate("");
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Categories");
      });
  };
  return {
    name,
    imageUrl,
    setName,
    setImageUrl,
    handleUpdateCategories,
    successUpdate,
    errUpdate,
    setErrUpdate,
    showMessageModal,
    setShowMassageModal,
    showUpdateCategories,
    setShowUpdateCategories,
    categoriesData,
    setCategoriesData,
    editCategoriesId,
    setEditCategoriesId,
  };
};

export default useUpdateCategories;
