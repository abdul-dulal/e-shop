import React, { useEffect, useState } from "react";

const useSinglevendor = (user) => {
  const [vendor, setVendor] = useState();
  useEffect(() => {
    fetch(`http://localhost:4000/collectVendor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVendor(data));
  }, [user?.email]);
  return [vendor];
};

export default useSinglevendor;
