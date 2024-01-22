import { useState } from "react";
import { updateCategoriesData } from "../utils/apis/data";

const useUpdateCategories = (imageUrl, triggerUpdate, setTriggerUpdate) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [name, setName] = useState("");
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdateCategories, setShowUpdateCategories] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);
  const [editCategoriesId, setEditCategoriesId] = useState(null);

  const handleUpdateCategories = (id, onHide) => {
    updateCategoriesData(id, name, imageUrl)
      .then((res) => {
        setSuccessUpdate("Update Categories success");
        setShowMassageModal(true);
        setShowUpdateCategories(false);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessUpdate("");
          onHide();
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Categories");
      })
      .finally(() => {
        if (setTriggerUpdate) {
          setTriggerUpdate((prev) => (prev ? false : true));
        }
      });
  };
  return {
    name,
    setName,
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
