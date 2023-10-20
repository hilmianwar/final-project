import { useEffect, useState } from "react";
import { bannerData } from "../utils/apis/data";

export const useBanner = () => {
  const [banner, setBanner] = useState([]);
  const [current, setCurrent] = useState(0);

  const getBannerData = () => {
    bannerData()
      .then((res) => {
        // const resData = res.data.data;
        // const selectedData = resData
        //   .slice(4, 5)
        //   .concat(resData.slice(8, 10));
        // setBanner(selectedData);
        setBanner(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nextSlide = () => {
    current === banner.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const prevSlide = () => {
    current === 0 ? setCurrent(banner.length - 1) : setCurrent(current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    getBannerData();
  }, []);

  return { banner, current, nextSlide, prevSlide };
};
