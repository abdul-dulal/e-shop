import React, { useState } from "react";
import cart from "../../assets/icon/wishlist.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import remove from "../../assets/icon/delete.png";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
const Modal = ({ popup, setPopup, data }) => {
  const [increment, setIncrement] = useState(1);
  const fbShare = "https://www.facebook.com/";
  const twShare = "https://twitter.com/";
  const lkShare = "https://www.linkedin.com/feed/";
  return (
    <div>
      {popup ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none z-50 mt-8 ">
            <div className="relative my-6 w-11/12 md:w-4/5 m-auto bg-gray-600 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-between mt-8 px-8 pt-4">
                  <h2 className="text-2xl font-bold">{data.title}</h2>
                  <img
                    src={remove}
                    alt=""
                    onClick={() => setPopup(false)}
                    className="cursor-pointer text-2xl font-semibold text-gray-400 "
                  />
                </div>
                <hr />
                <div className="grid grid-cols-2 gap-6 container py-10 ">
                  <div>
                    <img
                      src={data.img}
                      className="w-11/12  rounded-lg border-2 p-3"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl text-[#6B7280] mb-2 ">
                      {data.title}
                    </h2>
                    <div className="flex gap-2 text-2xl text-[#6B7280]">
                      <p>${data.price}</p>
                      <span>-</span>
                      <p className="line-through">${data.price2}</p>
                    </div>
                    <p className="mb-5">
                      Chocolate is a food product made from roasted and ground
                      cacao pods, that is available as a liquid, solid or paste,
                      on its own or as a flavoring agent in other foods.
                      Chocolate is a food product made from roasted and ground
                      cacao pods, that is available as a liquid, solid or paste,
                      on its own or as a flavoring agent in other foods
                    </p>
                    <p className="border-solid border-2 bg-gray-100 my-10"></p>
                    <div className="flex gap-6 items-center ">
                      <div className="space-x-4 text-xl font-bold text-[#6B7280] border-2 h-10    w-28  flex items-center justify-center">
                        <button
                          disabled={increment <= 1}
                          onClick={() => setIncrement(increment - 1)}
                          className="cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xl">{increment}</span>
                        <button
                          disabled={increment >= 10}
                          onClick={() => setIncrement(increment + 1)}
                          className="cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex gap-3 items-center">
                        <button className=" bg-gray-800 text-white text-sm w-36 h-10 uppercase rounded-md hover:bg-purple-600 hover:text-white duration-500">
                          Add to cart
                        </button>
                        <img src={cart} className=" w-8 h-8" alt="" />
                      </div>
                    </div>
                    <p className=" mt-4">Category: {data.category}</p>
                    <p className="mb-8">Tags: {data.tags}</p>

                    <div className="flex gap-7 ">
                      <FacebookShareButton url={fbShare}>
                        <FacebookIcon size={32} round={true} />
                      </FacebookShareButton>
                      <TwitterShareButton url={twShare}>
                        <TwitterIcon size={32} round={true} />
                      </TwitterShareButton>
                      <LineShareButton url={lkShare}>
                        <LinkedinIcon size={32} round={true} />
                      </LineShareButton>
                    </div>
                    <p className="border-solid border-2 bg-gray-100 my-10"></p>
                    <div>
                      <p>Sold by</p>
                      <p className="mb-10">{data.vendorName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
