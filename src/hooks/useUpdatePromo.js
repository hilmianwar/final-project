import { useState, useEffect } from "react";
import { updateCategoriesData, updatePromoData } from "../utils/apis/data";
import { useCategories } from "./useCategories";

const useUpdatePromo = () => {
  const [promoData, setPromoData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [condition, setCondition] = useState("");
  const [promCode, setPromCode] = useState("");
  const [promDiscPrice, setPromDiscPrice] = useState(0);
  const [minClaimPrice, setMinClaimPrice] = useState(0);
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdatePromo, setShowUpdatePromo] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);
  const [editPromoId, setEditPromoId] = useState(null);

  const handleUpdatePromo = (id) => {
    updatePromoData(
      id,
      name,
      description,
      imageUrl,
      condition,
      promCode,
      promDiscPrice,
      minClaimPrice
    )
      .then((res) => {
        setSuccessUpdate("Update Promo succes");
        setShowMassageModal(true);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessUpdate("");
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Promo");
      });
  };
  return {
    name,
    setName,
    description,
    setDescription,
    imageUrl,
    setImageUrl,
    condition,
    setCondition,
    promCode,
    setPromCode,
    promDiscPrice,
    setPromDiscPrice,
    minClaimPrice,
    setMinClaimPrice,
    promoData,
    setPromoData,
    handleUpdatePromo,
    successUpdate,
    errUpdate,
    setErrUpdate,
    showMessageModal,
    setShowMassageModal,
    showUpdatePromo,
    setShowUpdatePromo,
    editPromoId,
    setEditPromoId,
  };
};

export default useUpdatePromo;
