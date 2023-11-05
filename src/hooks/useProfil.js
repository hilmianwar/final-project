import { useEffect, useState } from "react";
import { profilData } from "../utils/apis/data";

export const useProfil = () => {
  const [profil, setProfil] = useState([]);
  const [errProfil, setErrProfil] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getProfilData = () => {
    profilData()
      .then((res) => {
        setProfil(res.data.data);
        setIsLoading(false); //matikan isLoading ketika datanya sudah dapat
      })
      .catch((err) => {
        setErrProfil(err.message);
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getProfilData();
  }, [profil]);

  return { profil, isLoading, errProfil };
};
