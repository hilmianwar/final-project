import { useState } from "react";
import { updateBannerData, updateProfilData } from "../utils/apis/data";

const useUpdateProfil = (imageUrl, triggerProfil, setTriggerProfil) => {
  const [profilData, setProfilData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successUpdate, setSuccessUpdate] = useState("");
  const [errUpdate, setErrUpdate] = useState("");
  const [showUpdateProfil, setShowUpdateProfil] = useState(false);
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleUpdateProfil = (onHide) => {
    updateProfilData(name, email, imageUrl, phoneNumber)
      .then((res) => {
        setSuccessUpdate("Update Profil success");
        setShowMassageModal(true);
        setShowUpdateProfil(false);
        setTimeout(() => {
          setShowMassageModal(false);
          setSuccessUpdate("");
          onHide();
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setErrUpdate("error Update Profil");
      })
      .finally(() => {
        if (setTriggerProfil) {
          setTriggerProfil((prev) => (prev ? false : true));
        }
      });
  };
  return {
    name,
    setName,
    email,
    setEmail,
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
