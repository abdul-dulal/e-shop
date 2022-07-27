import React from "react";
import Category from "./Category";
import ClientReviews from "./ClientReviews";
import Products from "./Products";

import Service from "./Service";
import Slider from "./Slider";
import Vendorslider from "./vendor/Vendorslider";

const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <Service />
      <Category />
      <Products />
      <Vendorslider />
      <ClientReviews />
    </div>
  );
};

export default Home;
