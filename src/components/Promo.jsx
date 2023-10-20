import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import usePromo from "../hooks/usePromo";

const Product = () => {
  const { promo, responsive } = usePromo();
  console.log(promo);
  return (
    <div className="lg:mx-[120px] my-20">
      <div className="text-white text-center font-monts mb-8">
        <h2 className="text-md">Exclusive Deals</h2>
        <h1 className="text-5xl">Promo</h1>
      </div>
      <Carousel responsive={responsive}>
        {promo.map((item) => (
          <div className="h-72 w-30 flex justify-center">
            <div className="h-full w-[94%] border border-neutral-600  flex flex-col rounded-md">
              <div
                className="w-full h-1/2 rounded-md"
                style={{
                  background: `URL(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="w-full h-1/2 pl-1">
                <h1 className="text-white text-lg font-semibold">
                  {item.title}
                </h1>
                <p className="text-white text-sm">
                  Rp {item.promo_discount_price}
                </p>
                <button className="bg-emerald-600 text-white p-1 px-3 rounded-md hover:bg-emerald-700">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Product;
