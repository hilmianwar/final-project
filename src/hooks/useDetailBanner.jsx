import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const useDetailBanner = () => {
  const [banner, setBanner] = useState();
  const param = useParams();
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

  const headers = {
    apiKey: apiKey,
    "Content-Type": "application/json",
  };

  const getDetailBanner = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/${param.userId}`,
        { headers: headers }
      )
      .then((res) => {
        setBanner(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailBanner();
  }, []);

  return { banner, param };
};

export default useDetailBanner;
