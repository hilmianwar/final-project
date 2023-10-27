import React from "react";
import { useProfil } from "../hooks/useProfil";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useUpdateProfil from "../hooks/useUpdateProfil";
import UpdateProfil from "../components/UpdateProfil";
import { AiOutlineEdit } from "react-icons/ai";

const Profil = () => {
  const { profil, errProfil, isLoading } = useProfil();
  const { showUpdateProfil, setShowUpdateProfil, profilData, setProfilData } =
    useUpdateProfil();
  if (isLoading) {
    return <div className="text-white">Loading...</div>; // Menampilkan pesan "Loading..." ketika isLoading adalah true
  }

  if (errProfil) {
    return <div className="text-white">{errProfil}</div>; //menampilkan pesan error ketika errProfil adalah true
  }
  return (
    <div>
      <Header />
      {/* memunculkan form Update banner */}
      {showUpdateProfil && (
        <UpdateProfil
          show={showUpdateProfil}
          onHide={() => setShowUpdateProfil(false)}
          profil={profilData}
        />
      )}
      <div className="flex flex-col justify-center items-center mx-2 lg:mx-20 font-mont text-white mb-6 pt-32 py-10">
        <h1 className="text-center font-monts text-2xl">Profil Info</h1>
        <div className="flex flex-col mt-10 w-full justify-center items-center ">
          <div
            className="h-20 w-20  border border-neutral-700 rounded-[50%] mb-2"
            style={{
              backgroundImage: `url(${profil?.profilePictureUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex justify-center items-center gap-2">
            <h3 className="font-semibold text-lg mb-4">{profil?.name}</h3>
            <button
              onClick={() => {
                setShowUpdateProfil(true);
                setProfilData(profil);
              }}
              title="Update Profil"
              className="flex justify-center items-center rounded-md text-sm -mt-4 h-5 w-5 bg-emerald-500 hover:bg-emerald-600"
            >
              <AiOutlineEdit />
            </button>
          </div>
          <div>
            <p className="flex flex-col mb-2">
              <span>
                <span className="text-sm">Id</span> <span>: </span>
              </span>
              <span className="font-semibold">{profil?.id}</span>
            </p>
            <p className="flex flex-col mb-2">
              <span>
                <span className="text-sm">Name</span> <span>: </span>
              </span>
              <span className="font-semibold">{profil?.name}</span>
            </p>
            <p className="flex flex-col mb-2">
              <span>
                <span className="text-sm">Email</span> <span>: </span>
              </span>
              <span className="font-semibold">{profil?.email}</span>
            </p>
            <p className="flex flex-col mb-2">
              <span>
                <span className="text-sm">Role</span> <span>: </span>
              </span>
              <span className="font-semibold">{profil?.role}</span>
            </p>
            <p className="flex flex-col mb-2">
              <span>
                <span className="text-sm">Phone Number</span> <span>: </span>
              </span>
              <span className="font-semibold">{profil?.phoneNumber}</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
