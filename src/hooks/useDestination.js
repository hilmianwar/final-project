import { useEffect, useState } from "react";
import { destinationData } from "../utils/apis/data";
import { useNavigate } from "react-router";

export const useDestination = () => {
  const [destination, setDestination] = useState([]);
  const [errDestination, setErrDestination] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const getDestinationData = () => {
    destinationData()
      .then((res) => {
        setDestination(res.data.data);
        setIsLoading(false); //matikan isLoading ketika datanya sudah dapat
      })
      .catch((err) => {
        setErrDestination(err.message);
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getDestinationData();
  }, [destination]);

  return {
    destination,
    setDestination,
    navigate,
    errDestination,
    isLoading,
    search,
    setSearch,
  };
};
