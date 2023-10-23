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
        console.log(res);
      })
      .catch((err) => {
        setErr("Error adding Promo");
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
  };
};
