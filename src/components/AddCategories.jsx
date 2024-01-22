import React from "react";
import { useAddCategories } from "../hooks/useAddCategories";
import MessageModal from "./MessageModal";
import { useUploadImage } from "../hooks/useUploadImage";

const AddCategories = ({
  show,
  onHide,
  triggerCategories,
  setTriggerCategories,
}) => {
  const { imageUrl, handleUploadImage } = useUploadImage();
  const {
    setName,
    handleAddCategories,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
    showMessageModal,
  } = useAddCategories(imageUrl?.[0], triggerCategories, setTriggerCategories);
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
            <h3 className="font-semibold">Add Categories</h3>
          </div>
          <form>
            <MessageModal
              show={showMessageModal}
              err={err}
              succes={successMessage}
            />

            <div className="mb-9">
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
            <div className="mb-9">
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
          </form>
          <div className="mt-4">
            <button
              onClick={() => handleAddCategories(onHide)}
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

export default AddCategories;
