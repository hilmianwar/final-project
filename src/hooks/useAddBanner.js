import { useState } from "react";
import { addBannerData } from "../utils/apis/data";

export const useAddBanner = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showAddBanner, setShowAddBanner] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState("");
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleAddBanner = () => {
    addBannerData(name, imageUrl)
      .then((res) => {
        setSuccessMessage("Banner added successfully");
        setShowMassageModal(true);
        setShowAddBanner(false);
        console.log(res);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErr("Error adding Banner");
        setShowMassageModal(true);
        console.log(err);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };

  return {
    setName,
    setImageUrl,
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
