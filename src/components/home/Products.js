import React, { useState } from "react";
import Productcard from "./Productcard";

const Products = () => {
  const [showProduct, setShowproduct] = useState("best");
  console.log(showProduct);
  return (
    <div>
      <div className="mt-20">
        <h1>HIGHLIGHTS PRODUCTS</h1>
      </div>
      <div className="flex justify-center space-x-4 mt-10">
        <button
          onClick={() => setShowproduct("best")}
          className={`uppercase bg-[#7C3AED] py-2 px-6 text-white font-semibold ${
            showProduct === "best" ? "bg-black" : ""
          }`}
        >
          Best Selling
        </button>
        <button
          onClick={() => setShowproduct("top")}
          className={`uppercase bg-[#7C3AED] py-2 px-6 text-white font-semibold hover:bg-black ${
            showProduct === "top" ? "bg-black" : ""
          }`}
        >
          top rated
        </button>
        <button
          onClick={() => setShowproduct("new")}
          className={`uppercase bg-[#7C3AED] py-2 px-6 text-white font-semibold hover:bg-black ${
            showProduct === "new" ? "bg-black" : ""
          }`}
        >
          New Arrival
        </button>
      </div>
      {showProduct === "best" && <Productcard title="best seling" />}
      {showProduct === "new" && <Productcard title="new arrival" />}
      {showProduct === "top" && <Productcard title="top ratet" />}
    </div>
  );
};

export default Products;
