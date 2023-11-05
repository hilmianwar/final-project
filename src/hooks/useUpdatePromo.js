import { useState } from "react";
import { updatePromoData } from "../utils/apis/data";

const useUpdatePromo = (imageUrl) => {
  const [promoData, setPromoData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [promCode, setPromCode] = useState("");
  const [promDiscPrice, setPromDiscPrice] = useState(0);
  const [minClaimPrice, setMinClaimPrice] = useState(0);
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdatePromo, setShowUpdatePromo] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);
  const [editPromoId, setEditPromoId] = useState(null);

  const handleUpdatePromo = (id, onHide) => {
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
        setShowUpdatePromo(false);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessUpdate("");
          onHide();
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Promo");
        setShowMassageModal(true);
        setTimeout(() => {
          setShowMassageModal(false);
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    name,
    setName,
    description,
    setDescription,
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
