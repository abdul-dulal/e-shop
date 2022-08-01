import React, { useState } from "react";
import useVendor from "../../hooks/useVendor";

const Profile = ({ user }) => {
  const { products } = useVendor(user);

  return (
    <div>
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
      <div className="my-14">
        <h2 className="text-2xl font-semibold">Product Ratting and Reviews</h2>
        {products.map((e) => (
          <div>
            <img src={e.reviewImg} alt="" />
            <p>{e.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
