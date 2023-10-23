import { useState } from "react";
import { addDestinationData, addPromoData } from "../utils/apis/data";

export const useAddDestination = () => {
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
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

  const handleAddDestination = () => {
    addDestinationData(
      categoryId,
      name,
      description,
      imageUrls,
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
        console.log(res);
      })
      .catch((err) => {
        setErr("Error adding Destination");
        console.log(err);
      });
  };

  return {
    setCategoryId,
    setName,
    setDescription,
    setImageUrls,
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
  };
};
