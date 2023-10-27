import { useState } from "react";
import { logoutData } from "../utils/apis/data";

const useLogout = (setIsLoggedIn) => {
  const [successLogout, setSuccessLogout] = useState("");
  const [errLogout, setErrLogout] = useState("");
  const [showModalLogout, setShowModalLogout] = useState(false);
  const handleLogout = () => {
    logoutData()
      .then((res) => {
        if (res.data.code === "200") {
          localStorage.removeItem("token");
          setSuccessLogout(res.data.message);
          setShowModalLogout(true);
          setTimeout(() => {
            setShowModalLogout(false);
            setSuccessLogout("");
            setIsLoggedIn(false); //setelah berhasil logoud, isLoggedIn menjadi false agar login & register keluar
          }, 2000); //modal disembunyikan setelah 2 detik
        } else {
          setErrLogout(res.data.message);
        }
      })
      .catch((err) => {
        setErrLogout("An error occurred while logging out.");
        setShowModalLogout(true);
        console.log(err);
        setTimeout(() => {
          setShowModalLogout(false);
          setErrLogout("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    successLogout,
    setSuccessLogout,
    errLogout,
    setErrLogout,
    showModalLogout,
    setShowModalLogout,
    handleLogout,
  };
};

export default useLogout;
