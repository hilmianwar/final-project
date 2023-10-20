import { useEffect, useState } from "react";
// import { detailActivitiesData } from "../utils/apis/data";
import { useParams } from "react-router";
import axios from "axios";
import DetailDestination from "../pages/DetailDestination";

const useDetailDestination = () => {
  const [destination, setDestination] = useState();
  const param = useParams();
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

  const headers = {
    apiKey: apiKey,
    "Content-Type": "application/json",
  };

  const getDetailDestination = () => {
    // detailActivitiesData();
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${param.userId}`,
        { headers: headers }
      )
      .then((res) => {
        setDestination(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailDestination();
  }, []);

  return { destination, param };
};

export default useDetailDestination;
