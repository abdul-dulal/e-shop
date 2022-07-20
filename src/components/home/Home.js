import React from "react";
import Category from "./Category";
import Products from "./Products";

import Service from "./Service";
import Slider from "./Slider";
import Vendor from "./vendor/Vendor";

const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <Service />
      <Category />
      <Products />
      <Vendor />
    </div>
  );
};

export default Home;
