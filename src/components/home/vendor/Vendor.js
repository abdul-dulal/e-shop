import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Vendor = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handle = () => {};

  useEffect(() => {
    fetch("http://localhost:4000/vendors")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
        setLoading(true);
      });
  }, []);

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

export default Vendor;
