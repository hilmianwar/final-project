import { useState } from "react";
import { UpdateDestinationData } from "../utils/apis/data";

const useUpdateDestination = (imageUrl) => {
  const [destinationData, setDestinationData] = useState([]);
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

  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdateDestination, setShowUpdateDestination] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editDestinationId, setEditDestinationId] = useState(null);

  const handleUpdateDestination = (id, onHide) => {
    UpdateDestinationData(
      id,
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
        setSuccessUpdate("Update Destination success");
        setShowModal(true);
        setShowUpdateDestination(false);
        setTimeout(() => {
          setShowModal(false);
          setSuccessUpdate("");
          onHide();
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Destination");
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    categoryId,
    setCategoryId,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    priceDiscount,
    setPriceDiscount,
    rating,
    setRating,
    totalReviews,
    setTotalReviews,
    facilities,
    setFacilities,
    address,
    setAddress,
    province,
    setProvince,
    city,
    setCity,
    locationMaps,
    setLocationMaps,

    handleUpdateDestination,
    successUpdate,
    errUpdate,
    setErrUpdate,
    showModal,
    setShowModal,
    showUpdateDestination,
    setShowUpdateDestination,
    editDestinationId,
    setEditDestinationId,
    destinationData,
    setDestinationData,
  };
};

export default useUpdateDestination;
