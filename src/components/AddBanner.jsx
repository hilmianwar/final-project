import React from "react";
import { useAddBanner } from "../hooks/useAddBanner";
import MessageModal from "./MessageModal";

const AddBanner = ({ show, onHide }) => {
  const {
    setName,
    setImageUrl,
    handleAddBanner,
    err,
    setErr,
    successMessage,
    setSuccessMessage,
    showMessageModal,
    setShowMassageModal,
  } = useAddBanner();
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
            <h3 className="font-semibold">Add Banner</h3>
          </div>
          <form>
            {/* {!!err.length && (
              <div className=" bg-red-500 p-2 rounded-md flex justify-between">
                <p>{err}</p>
                <button onClick={() => setErr("")} className=" pr-1">
                  X
                </button>
              </div>
            )} */}
            {/* {!!successMessage.length && (
              <div className=" bg-green-500 p-2 rounded-md flex justify-between">
                <p>{successMessage}</p>
                <button onClick={() => setSuccessMessage("")} className=" pr-1">
                  X
                </button>
              </div>
            )} */}
            <MessageModal
              show={showMessageModal}
              //   onHide={() => setShowMassageModal(false)}
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
                Image URL
              </label>
              <input
                type="text"
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter image URL"
              />
            </div>
          </form>
          <div className="mt-4">
            <button
              onClick={handleAddBanner}
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

export default AddBanner;
