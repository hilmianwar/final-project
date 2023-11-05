import { useEffect } from "react";
import React from "react";
import useUpdatePromo from "../hooks/useUpdatePromo";
import MessageModal from "./MessageModal";
import { useUploadImage } from "../hooks/useUploadImage";

const UpdatePromo = ({ show, onHide, promo, id }) => {
  const { imageUrl, setImageUrl, handleUploadImage } = useUploadImage();
  const {
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
    handleUpdatePromo,
    errUpdate,
    setErrUpdate,
    successUpdate,
    setSuccessUpdate,
    showMessageModal,
  } = useUpdatePromo(imageUrl?.[0]);

  useEffect(() => {
    if (promo) {
      setName(promo.title);
      setDescription(promo.description);
      setImageUrl(promo.imageUrl);
      setCondition(promo.terms_condition);
      setPromCode(promo.promo_code);
      setPromDiscPrice(promo.promo_discount_price);
      setMinClaimPrice(promo.minimum_claim_price);
    }
  }, [promo]);

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
            <h3 className="font-semibold">Update Promo</h3>
          </div>
          <form>
            <MessageModal
              show={showMessageModal}
              err={errUpdate}
              succes={successUpdate}
            />
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
                Terms Condition
              </label>
              <input
                type="text"
                value={condition}
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
                value={promCode}
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
                value={promDiscPrice}
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
                value={minClaimPrice}
                onChange={(e) => setMinClaimPrice(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter min claim price"
              />
            </div>
          </form>
          <div className="modal-footer mt-4">
            <button
              onClick={() => handleUpdatePromo(id, onHide)}
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

export default UpdatePromo;
