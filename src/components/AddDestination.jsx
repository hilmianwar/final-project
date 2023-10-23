import React from "react";
import { useAddDestination } from "../hooks/useAddDestination";

const AddDestination = ({ show, onHide }) => {
  const {
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
    handleAddDestination,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
  } = useAddDestination();
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
      <div className="bg-neutral-900 text-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto h-[660px]">
        <div className="py-4 text-left px-6">
          <div className="text-xl -mt-3 text-center mb-4">
            <h3 className="font-semibold">Add Destination</h3>
          </div>
          <form>
            {!!err.length && (
              <div className=" bg-red-500 p-2 rounded-md flex justify-between">
                <p>{err}</p>
                <button onClick={() => setErr("")} className=" pr-1">
                  X
                </button>
              </div>
            )}
            {!!successMessage.length && (
              <div className=" bg-green-500 p-2 rounded-md flex justify-between">
                <p>{successMessage}</p>
                <button onClick={() => setSuccessMessage("")} className=" pr-1">
                  X
                </button>
              </div>
            )}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Id
              </label>
              <input
                type="text"
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
                Image URL
              </label>
              <input
                type="text"
                onChange={(e) => setImageUrls(e.target.value.split(","))} // Memisahkan nilai input berdasarkan koma (,) dan mengubahnya menjadi array
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter image URL"
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
              onClick={handleAddDestination}
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