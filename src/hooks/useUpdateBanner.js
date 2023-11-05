import { useState } from "react";
import { updateBannerData } from "../utils/apis/data";

const useUpdateBanner = (imageUrl) => {
  const [bannerData, setBannerData] = useState([]);
  const [name, setName] = useState("");
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);
  const [editBannerId, setEditBannerId] = useState(null);

  const handleUpdateBanner = (id, onHide) => {
    updateBannerData(id, name, imageUrl)
      .then((res) => {
        setSuccessUpdate("Update Banner succes");
        setShowMassageModal(true);
        setShowUpdateBanner(false);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessUpdate("");
          onHide();
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Banner");
        setShowMassageModal(true);
        setTimeout(() => {
          setShowMassageModal(false);
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    name,
    setName,
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
