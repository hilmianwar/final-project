import { useState } from "react";
import { updateBannerData, updateProfilData } from "../utils/apis/data";

const useUpdateProfil = () => {
  const [profilData, setProfilData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdateProfil, setShowUpdateProfil] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleUpdateProfil = () => {
    updateProfilData(name, email, profilePictureUrl, phoneNumber)
      .then((res) => {
        setSuccessUpdate("Update Profil success");
        setShowMassageModal(true);
        setShowUpdateProfil(false);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessUpdate("");
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Profil");
      });
  };
  return {
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
    setSuccessUpdate,
    errUpdate,
    setErrUpdate,
    showMessageModal,
    setShowMassageModal,
    showUpdateProfil,
    setShowUpdateProfil,
    profilData,
    setProfilData,
  };
};

export default useUpdateProfil;
