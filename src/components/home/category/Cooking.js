import React from "react";
import { Link } from "react-router-dom";
const Cooking = () => {
  return (
    <div>
      <div className="mt-3">
        <ul className="flex  justify-center uppercase bg-gray-100 py-6">
          <Link to={"/"}>Home</Link>
          <li>-/-</li>
          <li>Category</li>
        </ul>
      </div>
      <h2 className="text-center text-2xl py-14">There are no Products</h2>
    </div>
  );
};

export default Cooking;
