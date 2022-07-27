import React, { useEffect, useState } from "react";

const useVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/vendors")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
        setLoading(true);
      });
  }, []);
  return { vendors, loading };
};

export default useVendor;
