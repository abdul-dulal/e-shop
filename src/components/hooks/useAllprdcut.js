import React, { useEffect, useState } from "react";

const useAllprdcut = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/get-product")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      });
  }, []);

  return { data, loading };
};

export default useAllprdcut;
