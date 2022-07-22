import React, { useEffect, useState } from "react";

const useVendor = (category) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:4000/get-accessories?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(true);
      });
  }, [category]);
  return { products, loading };
};

export default useVendor;
