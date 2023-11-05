import { useState } from "react";
import { addBannerData } from "../utils/apis/data";

export const useAddBanner = (imageUrl) => {
  const [name, setName] = useState("");
  const [showAddBanner, setShowAddBanner] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState("");
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleAddBanner = (onHide) => {
    addBannerData(name, imageUrl)
      .then((res) => {
        setSuccessMessage("Banner added successfully");
        setShowMassageModal(true);
        setShowAddBanner(false);
        console.log(res);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
          onHide();
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErr("Error adding Banner");
        setShowMassageModal(true);
        console.log(err);
        setTimeout(() => {
          setShowMassageModal(false);
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };

  return {
    setName,
    showAddBanner,
    setShowAddBanner,
    handleAddBanner,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
    showMessageModal,
    setShowMassageModal,
  };
};
