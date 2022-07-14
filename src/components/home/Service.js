import React from "react";
import shpinng from "../../assets/icon/shiping.png";
import support from "../../assets/icon/support.png";
import money from "../../assets/icon/money.png";
import discount from "../../assets/icon/discount.png";

const Service = () => {
  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-2 mt-16 justify-center items-center">
      <div className="flex ">
        <img src={shpinng} alt="" />
        <div className="ml-2">
          <h2 className="text-xl font-bold">Free Shipping</h2>
          <p>Free shipping on all order</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={support} alt="" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">Support 24/7</h2>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
      <div className="flex ">
        <img src={money} alt="" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">Money Return</h2>
          <p>Return within 30 days for an exchange</p>
        </div>
      </div>
      <div className="flex ">
        <img src={discount} alt="" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">Order Discount</h2>
          <p>5% discount on your order</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
