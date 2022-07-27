import React, { useEffect, useState } from "react";

import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import useAllprdcut from "../hooks/useAllprdcut";
import Loading from "../shere/Loading";

const ClientReviews = () => {
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/client-Review?isreview=yes")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="container mt-20 py-20 bg-gray-100">
      <h1 className="mb-10">Client Reviews</h1>

      {loading ? (
        <Swiper modules={[A11y, Autoplay]} slidesPerView={2} autoplay={true}>
          {reviews.map((review) => (
            <SwiperSlide>
              <div className="lg:flex justify-center bg-gray-100">
                <div>
                  <img
                    src={review.reviewImg}
                    className="h-28 w-28 rounded-full"
                    alt=""
                  />
                  <p className="font-semibold">{review.reviewName}</p>
                  <p>{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ClientReviews;
