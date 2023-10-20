import { useEffect, useState } from "react";
import { allUserData } from "../utils/apis/data";

export const useAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 768);

  const getAllUser = () => {
    allUserData()
      .then((res) => {
        setAllUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResize = () => {
    setIsSmallView(window.innerWidth <= 768);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return { allUser, isSmallView, handleResize };
};
