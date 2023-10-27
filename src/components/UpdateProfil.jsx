import { useEffect } from "react";
import React from "react";
import MessageModal from "./MessageModal";
import useUpdateProfil from "../hooks/useUpdateProfil";

const UpdateProfil = ({ show, onHide, profil }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    profilePictureUrl,
    setProfilePictureUrl,
    phoneNumber,
    setPhoneNumber,
    handleUpdateProfil,
    successUpdate,
    errUpdate,
    showMessageModal,
  } = useUpdateProfil();

  useEffect(() => {
    if (profil) {
      setName(profil.name);
      setEmail(profil.email);
      setProfilePictureUrl(profil.profilePictureUrl);
      setPhoneNumber(profil.phoneNumber);
    }
  }, [profil]);

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
          <div className="text-xl mt-10 text-center mb-4">
            <h3 className="font-semibold">Update Profil</h3>
          </div>
          <form>
            <MessageModal
              show={showMessageModal}
              err={errUpdate}
              succes={successUpdate}
            />
            <div className="mb-4">
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter image URL"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Profil Picture Url
              </label>
              <input
                type="text"
                value={profilePictureUrl}
                onChange={(e) => setProfilePictureUrl(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter image URL"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border p-2 rounded-lg text-black"
                placeholder="Enter image URL"
              />
            </div>
          </form>
          <div className="modal-footer mt-4">
            <button
              onClick={handleUpdateProfil}
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

export default UpdateProfil;
