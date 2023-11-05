import { useEffect } from "react";
import React from "react";
import useUpdateDestination from "../hooks/useUpdateDestination";
import MessageModal from "./MessageModal";
import { useUploadImage } from "../hooks/useUploadImage";

const UpdateDestination = ({ show, onHide, destination, id }) => {
  const { imageUrl, setImageUrl, handleUploadImage } = useUploadImage();
  const {
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
    errUpdate,
    setErrUpdate,
    successUpdate,
    setSuccessUpdate,
    showModal,
    setShowModal,
  } = useUpdateDestination(imageUrl);

  useEffect(() => {
    if (destination) {
      setCategoryId(destination.categoryId);
      setName(destination.title);
      setDescription(destination.description);
      setImageUrl(destination.imageUrls);
      setPrice(destination.price);
      setPriceDiscount(destination.price_discount);
      setPriceDiscount(destination.price_discount);
      setRating(destination.rating);
      setTotalReviews(destination.total_reviews);
      setFacilities(destination.facilities);
      setAddress(destination.address);
      setProvince(destination.province);
      setCity(destination.city);
      setLocationMaps(destination.location_maps);
    }
  }, [destination]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        show ? "" : "hidden"
      }`}
    >
      <div
        className={`modal-overlay absolute w-full h-full bg-gray-900 opacity-50 ${
          show ? "block" : "hidden"
        }`}
      ></div>
      <div className="bg-neutral-900 text-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto h-[510px]">
        <div className="py-4 text-left px-6">
          <div className="text-xl mt-10 text-center mb-8">
            <h3 className="font-semibold">Update Destination</h3>
          </div>
          <form>
            <MessageModal
              show={showModal}
              onHide={() => setShowModal(false)}
              err={errUpdate}
              succes={successUpdate}
            />
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Id
              </label>
              <input
                type="text"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter Category Id"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter description"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleUploadImage(e.target.files[0])}
                className="w-full border p-2 rounded-lg text-white"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter price"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price Discount
              </label>
              <input
                type="number"
                value={priceDiscount}
                onChange={(e) => setPriceDiscount(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter price discount"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Rating
              </label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter rating"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Total Reviews
              </label>
              <input
                type="number"
                value={totalReviews}
                onChange={(e) => setTotalReviews(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter total reviews"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Facilities
              </label>
              <input
                type="text"
                value={facilities}
                onChange={(e) => setFacilities(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter facilities"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter address"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Province
              </label>
              <input
                type="text"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter province"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter city"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location Map
              </label>
              <input
                type="text"
                value={locationMaps}
                onChange={(e) => setLocationMaps(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter location map"
              />
            </div>
          </form>
          <div className="modal-footer mt-4">
            <button
              onClick={() => handleUpdateDestination(id, onHide)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={onHide}
              className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDestination;
