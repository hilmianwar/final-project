import React from "react";
import { useAddPromo } from "../hooks/useAddPromo";
import MessageModal from "./MessageModal";

const AddPromo = ({ show, onHide }) => {
  const {
    setName,
    setDescription,
    setImageUrl,
    setCondition,
    setPromCode,
    setPromDiscPrice,
    setMinClaimPrice,
    handleAddPromo,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
    showMessageModal,
  } = useAddPromo();
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
            <h3 className="font-semibold">Add Promo</h3>
          </div>
          <form>
            <MessageModal
              show={showMessageModal}
              err={err}
              succes={successMessage}
            />
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
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter image URL"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Terms Condition
              </label>
              <input
                type="text"
                onChange={(e) => setCondition(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter terms condition"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Promo Code
              </label>
              <input
                type="text"
                onChange={(e) => setPromCode(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter promo code"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Promo Discount Price
              </label>
              <input
                type="number"
                onChange={(e) => setPromDiscPrice(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter promo disc price"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Minimum Claim Price
              </label>
              <input
                type="number"
                onChange={(e) => setMinClaimPrice(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter min claim price"
              />
            </div>
          </form>
          <div className="mt-4">
            <button
              onClick={handleAddPromo}
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

export default AddPromo;
