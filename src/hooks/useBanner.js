import { useEffect, useState } from "react";
import { bannerData } from "../utils/apis/data";

export const useBanner = () => {
  const [banner, setBanner] = useState([]);

  const getBannerData = () => {
    bannerData()
      .then((res) => {
        const resData = res.data.data;
        const selectedData = resData
          .slice(4, 7)
          // .concat(resData.slice(4, 7))
          .concat(resData.slice(13, 14));
        setBanner(selectedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBannerData();
  }, []);

  return { banner };
};
