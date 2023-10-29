import { useEffect, useState } from "react";
import { allUserData } from "../utils/apis/data";

export const useAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [errUser, setErrUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getAllUser = () => {
    allUserData()
      .then((res) => {
        setAllUser(res.data.data);
        setIsLoading(false); //matikan isLoading ketika datanya sudah dapat
      })
      .catch((err) => {
        setErrUser(err.message);
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return { allUser, isLoading, errUser, search, setSearch };
};
