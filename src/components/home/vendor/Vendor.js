import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import slider1 from "../../../assets/vendor/1649414565889-photo-camera.png.png";
import slider2 from "../../../assets/vendor/1649434282040-food.png.png";
import slider3 from "../../../assets/vendor/1649436056182-fashion.png.png";
import slider4 from "../../../assets/vendor/1649572820815-shirts.png.png";
const Vendor = () => {
  const handle = () => {
    console.log("click");
  };
  return (
    <div className="container mt-20">
      <h1 className="mb-10">Our Vendors</h1>
      <Swiper modules={[A11y, Autoplay]} slidesPerView={4} autoplay={false}>
        <SwiperSlide>
          <div className="border-2  py-2 px-2 cursor-pointer  ">
            <img src={slider1} className="h-14 w-14" alt="" />
            <p className="font-semibold">e-Shop-Mall</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2  py-2 px-2 cursor-pointer ">
            <img src={slider2} className="h-14 w-14" alt="" />
            <p className="font-semibold">Food Zone</p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2  py-2 px-2 cursor-pointer ">
            <img src={slider3} className="h-14 w-14" alt="" />
            <p className="font-semibold">Gril`s Shop</p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2  py-2 px-2 cursor-pointer" onClick={handle}>
            <img src={slider4} className="h-14 w-14" alt="" />
            <p className="font-semibold">Fashion Shop</p>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Vendor;
