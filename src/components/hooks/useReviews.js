import React, { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return { reviews };
};

export default useReviews;
