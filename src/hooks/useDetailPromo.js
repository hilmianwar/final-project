import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const useDetailPromo = () => {
  const [promo, setPromo] = useState();
  const param = useParams();
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

  const headers = {
    apiKey: apiKey,
    "Content-Type": "application/json",
  };

  const getDetailPromo = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${param.userId}`,
        { headers: headers }
      )
      .then((res) => {
        setPromo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailPromo();
  }, []);

  return { promo, param };
};

export default useDetailPromo;
