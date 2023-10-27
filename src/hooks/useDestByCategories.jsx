import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const useDestByCategories = () => {
  const [destByCategories, setDestByCategories] = useState();
  const param = useParams();
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

  const headers = {
    apiKey: apiKey,
    "Content-Type": "application/json",
  };

  const navigate = useNavigate();

  const getDestByCategories = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities-by-category/${param.userId}`,
        { headers: headers }
      )
      .then((res) => {
        setDestByCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDestByCategories();
  }, []);

  return { destByCategories, param, navigate };
};

export default useDestByCategories;
