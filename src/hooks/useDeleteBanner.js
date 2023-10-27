import { useState } from "react";
import { deleteBannerData, deleteCategoriesData } from "../utils/apis/data";

const useDeleteBanner = () => {
  const [successDelete, setSuccessDelete] = useState("");
  const [errDelete, setErrDelete] = useState("");
  const [showMassageModal, setShowMassageModal] = useState(false);
  const handleDeleteBanner = (id, banner, setBanner) => {
    deleteBannerData(id)
      .then((res) => {
        setSuccessDelete("Delete Banner success");
        setShowMassageModal(true);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
        setBanner(banner.filter((banner) => banner.id !== id)); //otomatis menghapus data tanpa perlu di refresh
      })
      .catch((err) => {
        setErrDelete("Error delete Banner");
        setShowMassageModal(true);
        console.log(err);
        setTimeout(() => {
          setShowMassageModal(false);
          setErrDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    handleDeleteBanner,
    successDelete,
    errDelete,
    showMassageModal,
    setShowMassageModal,
  };
};

export default useDeleteBanner;
