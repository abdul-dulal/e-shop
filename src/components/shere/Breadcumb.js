import React from "react";
import { Link } from "react-router-dom";

const Breadcumb = () => {
  return (
    <div className="mt-3">
      <ul className="flex  justify-center uppercase bg-gray-100 py-6">
        <Link to={"/"}>Home</Link>
        <li>-/-</li>
        <li className="cursor-pointer">Category</li>
      </ul>
    </div>
  );
};

export default Breadcumb;
