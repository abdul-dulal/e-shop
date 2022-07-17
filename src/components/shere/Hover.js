import React, { useState } from "react";
import view from "../../assets/icon/view.png";
import wishlist from "../../assets/icon/wishlist.png";
import cart from "../../assets/icon/cart.png";
import Modal from "./Modal";
import Wishlist from "../wishlit/Wishlist";
const Hover = ({ data }) => {
  const [popup, setPopup] = useState(false);
  const handlePopup = ({ data }) => {
    setPopup(!popup);
  };

  return (
    <div>
      <div
        onClick={handlePopup}
        className=" flex gap-4 justify-center bg-[#7C3AED] h-10 py-1  w-[254px]  rounded accessories  "
      >
        <img
          src={view}
          className="p-1 bg-white rounded-full  cursor-pointer"
          alt=""
        />
        <img src={wishlist} className="p-1 bg-white rounded-full" alt="" />
        <img src={cart} className="p-1 bg-white rounded-full" alt="" />
      </div>

      <Modal popup={popup} setPopup={setPopup} data={data} />
    </div>
  );
};

export default Hover;
