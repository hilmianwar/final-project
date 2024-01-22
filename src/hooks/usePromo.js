import { useEffect, useState } from "react";
import { promoData } from "../utils/apis/data";
import { useNavigate } from "react-router";

const usePromo = () => {
  const [promo, setPromo] = useState([]);
  const [errPromo, setErrPromo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

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
        setIsLoading(false); //matikan isLoading ketika datanya sudah dapat
      })
      .catch((err) => {
        setErrPromo(err.message);
        setIsLoading(false); //matikan isLoading ketika datanya sudah dapat
        console.log(err);
      });
  };

  useEffect(() => {
    getPromoData();
  }, []);

  return {
    get: getPromoData,
    promo,
    setPromo,
    responsive,
    navigate,
    errPromo,
    isLoading,
    search,
    setSearch,
  };
};

export default usePromo;
