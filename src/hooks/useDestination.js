import { useEffect, useState } from "react";
import { destinationData } from "../utils/apis/data";

export const useDestination = () => {
  const [destination, setDestination] = useState([]);
  const getDestinationData = () => {
    destinationData()
      .then((res) => {
        setDestination(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDestinationData();
  }, []);

  return { destination, setDestination };
};
