import { useState, useEffect } from "react";
import { updateBannerData, updateCategoriesData } from "../utils/apis/data";
import { useCategories } from "./useCategories";

const useUpdateBanner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);
  const [editBannerId, setEditBannerId] = useState(null);

  const handleUpdateBanner = (id) => {
    updateBannerData(id, name, imageUrl)
      .then((res) => {
        setSuccessUpdate("Update Categories succes");
        setShowMassageModal(true);
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
    handleUpdateBanner,
    successUpdate,
    setSuccessUpdate,
    errUpdate,
    setErrUpdate,
    showMessageModal,
    setShowMassageModal,
    showUpdateBanner,
    setShowUpdateBanner,
    bannerData,
    setBannerData,
    editBannerId,
    setEditBannerId,
  };
};

export default useUpdateBanner;
