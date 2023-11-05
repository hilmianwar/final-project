import React from "react";
import { useAddDestination } from "../hooks/useAddDestination";
import MessageModal from "./MessageModal";
import { useUploadImage } from "../hooks/useUploadImage";
import { useCategories } from "../hooks/useCategories";

const AddDestination = ({ show, onHide }) => {
  const { imageUrl, handleUploadImage } = useUploadImage();
  const { categories } = useCategories();
  console.log(categories);
  const {
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
    handleAddDestination,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
    showMessageModal,
    setShowMassageModal,
  } = useAddDestination(imageUrl);
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
          <div className="text-xl -mt-3 text-center mb-4">
            <h3 className="font-semibold">Add Destination</h3>
          </div>
          <form>
            <MessageModal
              show={showMessageModal}
              err={err}
              succes={successMessage}
            />
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Id
              </label>
              <select
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
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
                onChange={(e) => setLocationMaps(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter location map"
              />
            </div>
          </form>
          <div className="mt-4">
            <button
              onClick={() => handleAddDestination(onHide)}
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

export default AddDestination;
