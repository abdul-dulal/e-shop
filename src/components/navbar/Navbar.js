import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import wishlist from "../../assets/icon/wishlist.png";
import cart from "../../assets/icon/cart.png";
import avatar from "../../assets/icon/avatar.a296afc6.png";
import Submenu from "./Submenu";
const Navbar = () => {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <nav>
      <div className="flex container justify-between items-center lg:h-16 md:h-16 h-6 invisible md:visible lg:visible  ">
        <div>
          <ul className="flex gap-8 items-center">
            <li className="text-3xl">
              <Link to={"/"}>e-shop</Link>
            </li>
            <li className="text-sm font-semibold mt-2 ">
              <NavLink
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
        </div>
        <div className="">
          <ul className="flex  justify-center gap-7">
            <div className="relative">
              <li>
                <img src={wishlist} className="cursor-pointer" alt="" />
              </li>
              <p className="absolute bottom-5 left-5  bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex items-center justify-center">
                0
              </p>
            </div>
            <div className="relative">
              <li>
                <img src={cart} className="cursor-pointer" alt="" />
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
      <Submenu />
    </nav>
  );
};

export default Navbar;