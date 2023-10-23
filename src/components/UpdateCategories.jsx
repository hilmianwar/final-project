import { useEffect } from "react";
import React from "react";
import useUpdateCategories from "../hooks/useUpdateCategories";

const UpdateCategories = ({ show, onHide, categories, id }) => {
  const {
    name,
    imageUrl,
    setName,
    setImageUrl,
    handleUpdateCategories,
    errUpdate,
    setErrUpdate,
    successUpdate,
    setSuccessUpdate,
  } = useUpdateCategories();

  useEffect(() => {
    if (categories) {
      setName(categories.name);
      setImageUrl(categories.imageUrl);
    }
  }, [categories]);

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
            <h3 className="font-semibold">Update Categories</h3>
          </div>
          <form>
            {!!errUpdate.length && (
              <div className=" bg-red-500 p-2 rounded-md flex justify-between">
                <p>{errUpdate}</p>
                <button onClick={() => setErrUpdate("")} className=" pr-1">
                  X
                </button>
              </div>
            )}
            {!!successUpdate.length && (
              <div className=" bg-green-500 p-2 rounded-md flex justify-between">
                <p>{successUpdate}</p>
                <button onClick={() => setSuccessUpdate("")} className=" pr-1">
                  X
                </button>
              </div>
            )}
            <div className="mb-9">
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
            <div className="mb-9">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter image URL"
              />
            </div>
          </form>
          <div className="modal-footer mt-4">
            <button
              onClick={() => handleUpdateCategories(id)}
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

export default UpdateCategories;
