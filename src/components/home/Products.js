import React, { useEffect, useState } from "react";
import Newarrival from "./Newarrival";
import Productcard from "./Productcard";
import Toprated from "./Toprated";

const Products = () => {
  const [showProduct, setShowproduct] = useState("best");

  return (
    <div>
      <div className="mt-20">
        <h1>HIGHLIGHTS PRODUCTS</h1>
      </div>
      <div className="flex justify-center space-x-4 mt-10">
        <button
          onClick={() => setShowproduct("best")}
          className={`uppercase bg-[#7C3AED] py-2 lg:px-6 md:px-6 px-2 text-white font-semibold ${
            showProduct === "best" ? "bg-black" : ""
          }`}
        >
          Best Selling
        </button>
        <button
          onClick={() => setShowproduct("top")}
          className={`uppercase bg-[#7C3AED] py-2 lg:px-6 md:px-6 px-2 text-white font-semibold hover:bg-black ${
            showProduct === "top" ? "bg-black" : ""
          }`}
        >
          top rated
        </button>
        <button
          onClick={() => setShowproduct("new")}
          className={`uppercase bg-[#7C3AED] py-2 lg:px-6 md:px-6 px-2 text-white font-semibold hover:bg-black ${
            showProduct === "new" ? "bg-black" : ""
          }`}
        >
          New Arrival
        </button>
      </div>
      {showProduct === "best" && <Productcard />}
      {showProduct === "top" && <Toprated />}
      {showProduct === "new" && <Newarrival />}
    </div>
  );
};

export default Products;
