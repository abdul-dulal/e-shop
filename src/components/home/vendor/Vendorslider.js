import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import React from "react";
import { useNavigate } from "react-router-dom";
import useVendor from "../../hooks/useVendor";

const Vendorslider = () => {
  const navigate = useNavigate();

  const { vendors, loading } = useVendor();
  return (
    <div className="container mt-20">
      <h1 className="mb-10">Our Vendors</h1>

      <Swiper modules={[A11y, Autoplay]} slidesPerView={4} autoplay={true}>
        {vendors.map((vendor) => (
          <SwiperSlide>
            <div
              className="border-2  py-2 px-2 cursor-pointer"
              onClick={() => navigate(`/shop/${vendor._id}`)}
            >
              <img src={vendor.img} className="h-14 w-14" alt="" />
              <p className="font-semibold">{vendor.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Vendorslider;
