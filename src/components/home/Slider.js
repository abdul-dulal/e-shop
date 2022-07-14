import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import slider1 from "../../assets/slider/slide-1.41fbedc4.png";
import slider2 from "../../assets/slider/slide-2.4d6978ae.png";
import slider3 from "../../assets/slider/slide-3.cdab5789.png";
const Slider = () => {
  return (
    <Swiper modules={[A11y, Autoplay]} slidesPerView={1} autoplay={true}>
      <SwiperSlide>
        <img src={slider3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider1} className="w-full" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
