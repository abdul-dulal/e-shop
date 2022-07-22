import React, { useState } from "react";
import view from "../../assets/icon/view.png";
import wishlist from "../../assets/icon/wishlist.png";
import cart from "../../assets/icon/cart.png";
import Modal from "./Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWishlist from "../hooks/useWishlist";
import useCart from "../hooks/useCart";
const Hover = ({ data }) => {
  const [popup, setPopup] = useState(false);
  const { refetch } = useWishlist();
  const { reload } = useCart();

  const handleWishlit = () => {
    const productDeatils = {
      name: data?.title,
      img: data.img,
      price: data.price,
      price2: data.price2,
      vendorName: data.vendorName,
      author: data.author,
      category: data.category,
    };
    fetch("http://localhost:4000/post-wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDeatils),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        refetch();
        toast("Successfully Added");
      });
  };

  const handleCart = () => {
    const newCart = {
      name: data.title,
      price: data.price,
      quantity: 1,
      img: data.img,
    };
    fetch("http://localhost:4000/post-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((response) => {
        reload();
        return response.json();
      })
      .then((data) => {
        toast("Successfully Added");
        reload();
      });
  };

  return (
    <div>
      <div className=" flex gap-4 justify-center bg-[#7C3AED] h-10 py-1  w-[254px]  rounded accessories  ">
        <img
          onClick={() => setPopup(!popup)}
          src={view}
          className="p-1 bg-white rounded-full  cursor-pointer"
          alt=""
        />
        <img
          src={wishlist}
          onClick={handleWishlit}
          className="p-1 bg-white rounded-full cursor-pointer"
          alt=""
        />

        <img
          src={cart}
          onClick={handleCart}
          className="p-1 bg-white rounded-full cursor-pointer"
          alt=""
        />
      </div>

      <Modal popup={popup} setPopup={setPopup} data={data} />
    </div>
  );
};

export default Hover;
