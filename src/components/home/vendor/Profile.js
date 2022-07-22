import React from "react";
import useVendor from "./useVendor";

const Profile = ({ category }) => {
  const { products } = useVendor(category);
  return (
    <div className="container flex justify-between flex-wrap mt-10 gap-10">
      <div className="border-2 px-4 py-4  ">
        <h4>Products</h4>
        <p>{products?.length}</p>
      </div>
      <div className="border-2 px-4 py-4  ">
        <h4>Sells</h4>
        <p>1</p>
      </div>
      <div className="border-2 px-4 py-4  ">
        <h4>Reviews</h4>
        <p>1</p>
      </div>
      <div className="border-2 px-4 py-4  ">
        <h4>Positive Rating</h4>
        <p>1</p>
      </div>
      <div className="border-2 px-4 py-4  ">
        <h4>Avarage Ratting</h4>
        <p>1</p>
      </div>
    </div>
  );
};

export default Profile;
