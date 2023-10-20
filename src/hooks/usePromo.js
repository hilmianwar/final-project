import React, { useEffect, useState } from "react";
import { promoData } from "../utils/apis/data";

const usePromo = () => {
  const [promo, setPromo] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const getPromoData = () => {
    promoData()
      .then((res) => {
        setPromo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPromoData();
  }, []);

  return { promo, responsive };
};

export default usePromo;
