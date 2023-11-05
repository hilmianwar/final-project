import { useState } from "react";
import { addDestinationData } from "../utils/apis/data";

export const useAddDestination = (imageUrl) => {
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [priceDiscount, setPriceDiscount] = useState(0);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [facilities, setFacilities] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [locationMaps, setLocationMaps] = useState("");
  const [showAddDestination, setShowAddDestination] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setErr] = useState("");
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleAddDestination = (onHide) => {
    addDestinationData(
      categoryId,
      name,
      description,
      imageUrl,
      price,
      priceDiscount,
      rating,
      totalReviews,
      facilities,
      address,
      province,
      city,
      locationMaps
    )
      .then((res) => {
        setSuccessMessage("Destination added successfully");
        setShowMassageModal(true);
        setShowAddDestination(false);
        console.log(res);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessMessage("");
          onHide();
        }, 2000); //modal disembunyikan setelah 2 detik
        console.log(res);
      })
      .catch((err) => {
        setErr("Error adding Destination");
        setShowMassageModal(true);
        console.log(err);
        setTimeout(() => {
          setShowMassageModal(false);
        }, 2000); //modal disembunyikan setelah 2 detik
        console.log(err);
      });
  };

  return {
    setCategoryId,
    setName,
    setDescription,
    setPrice,
    setPriceDiscount,
    setRating,
    setTotalReviews,
    setFacilities,
    setAddress,
    setProvince,
    setCity,
    setLocationMaps,
    showAddDestination,
    setShowAddDestination,
    handleAddDestination,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
    showMessageModal,
    setShowMassageModal,
  };
};
