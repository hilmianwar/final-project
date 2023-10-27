import { useEffect, useState } from "react";
import { addPromoData } from "../utils/apis/data";

export const useAddPromo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [condition, setCondition] = useState("");
  const [promCode, setPromCode] = useState("");
  const [promDiscPrice, setPromDiscPrice] = useState(0);
  const [minClaimPrice, setMinClaimPrice] = useState(0);
  const [showAddPromo, setShowAddPromo] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState("");
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleAddPromo = () => {
    addPromoData(
      name,
      description,
      imageUrl,
      condition,
      promCode,
      promDiscPrice,
      minClaimPrice
    )
      .then((res) => {
        setSuccessMessage("Promo added successfully");
        setShowMassageModal(true);
        console.log(res);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
        }, 2000); //modal disembunyikan setelah 2 detik
        console.log(res);
      })
      .catch((err) => {
        setErr("Error adding Promo");
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
    setDescription,
    setImageUrl,
    setCondition,
    setPromCode,
    setPromDiscPrice,
    setMinClaimPrice,
    showAddPromo,
    setShowAddPromo,
    handleAddPromo,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
    showMessageModal,
    setShowMassageModal,
  };
};
