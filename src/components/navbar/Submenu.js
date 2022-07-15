import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import wishlist from "../../assets/icon/wishlist.png";
import cart from "../../assets/icon/cart.png";
import avatar from "../../assets/icon/avatar.a296afc6.png";
import { HiMenu } from "react-icons/hi";

const Submenu = () => {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(false);
  console.log(show);

  const handleHide = () => {
    setHide(!hide);
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className=" grid grid-cols-2 container lg:hidden md:hidden block ">
      <div className="grid grid-cols-2 relative">
        <div className="space-y-6">
          <HiMenu className="text-3xl" onClick={handleShow} />
          {show ? (
            <>
              <ul className=" gap-8 space-y-6 ">
                <li className="text-sm font-semibold mt-2 hover:bg-[#7C3AED] p-[10px] ">
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            padding: "10px",
                            background: "#7C3AED",
                            width: "100%",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2 ">
                  <NavLink
                    to={"shop"}
                    className=""
                    style={({ isActive }) =>
                      isActive
                        ? {
                            border: "2px",
                            padding: "10px",
                            background: "#7C3AED",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="text-sm font-semibold mt-2">
                  <NavLink
                    to={"contact"}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            border: "2px",
                            padding: "10px",
                            background: "#7C3AED",
                            color: "white",
                            borderRadius: "4px",
                          }
                        : { color: "black" }
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            " "
          )}
        </div>
        <div className="ml-[-10px] mt-[-10px]">
          <a href="#" className="text-3xl ">
            e-shop
          </a>
        </div>
      </div>
      <div className="">
        <ul className="flex  justify-center gap-7">
          <div className="relative">
            <li>
              <img src={wishlist} alt="" />
            </li>
            <p className="absolute bottom-5 left-5  bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex items-center justify-center">
              0
            </p>
          </div>
          <div className="relative">
            <li>
              <img src={cart} alt="" />
            </li>
            <p className="absolute bottom-5 left-4  bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex items-center justify-center">
              0
            </p>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="">
              <img
                src={avatar}
                onClick={handleHide}
                className="w-8 h8 cursor-pointer"
                alt=""
              />
            </label>
            {hide ? (
              ""
            ) : (
              <>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
