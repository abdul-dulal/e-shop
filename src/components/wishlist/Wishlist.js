import React, { useState } from "react";
import useCart from "../hooks/useWishlist";
import Breadcumb from "../shere/Breadcumb";
import WishlistTable from "./WishlistTable";

const Wishlist = () => {
  const { wishlistInfo, refetch } = useCart();

  return (
    <div>
      <Breadcumb tag="Wishlist" />
      <div class="overflow-x-auto container mt-6">
        <table class="table w-full">
          <thead>
            <tr className=" ">
              <th className="text-[15px]">Image</th>
              <th className="text-[15px]"> Product Name</th>
              <th className="text-[15px]">Unit Pirce</th>
              <th className="text-[15px]">Add To Cart</th>
              <th className="text-[15px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistInfo?.map((e) => (
              <WishlistTable key={e._id} data={e} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
