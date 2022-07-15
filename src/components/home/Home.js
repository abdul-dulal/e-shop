import React from "react";
import Category from "./Category";
import Products from "./Products";

import Service from "./Service";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <Service />
      <Category />
      <Products />
    </div>
  );
};

export default Home;
