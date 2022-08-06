import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import wishlist from "../../assets/icon/wishlist.png";
import cart from "../../assets/icon/cart.png";
import avatar from "../../assets/icon/avatar.a296afc6.png";
import Submenu from "./Submenu";
import Cartmodal from "../cart/Cartmodal";
import useWishlist from "../hooks/useWishlist";
import WishlistData from "../hooks/useCart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import Logout from "../login/Logout";

const Navbar = () => {
  const [hide, setHide] = useState(true);
  const [cartmodal, setCartmodal] = useState(false);
  const [user] = useAuthState(auth);
  const { wishlistInfo } = useWishlist();
  const { cartInfo } = WishlistData();

  const handleHide = () => {
    setHide(!hide);
  };

  // useEffect(() => {
  //   const closeModal = (e) => {
  //     if (e.path[0].tagName !== "BUTTON") {
  //       setCartmodal(false);
  //     }
  //   };
  //   document.addEventListener("click", closeModal);
  //   return () => {
  //     document.removeEventListener("click", closeModal);
  //   };
  // }, []);

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
              <Link to={"wishlist"}>
                <img src={wishlist} className="cursor-pointer" alt="" />
              </Link>
              <p className="absolute bottom-5 left-5  bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistInfo ? wishlistInfo.length : "0"}
              </p>
            </div>
            <div className="relative">
              <li>
                <img
                  onClick={() => setCartmodal(!cartmodal)}
                  src={cart}
                  className="cursor-pointer"
                  alt=""
                />
              </li>
              <p className="absolute bottom-5 left-4  bg-gray-900 text-gray-100 w-5 h-5 rounded-full flex items-center justify-center">
                {cartInfo ? cartInfo.length : "0"}
              </p>
            </div>
            <div class="dropdown dropdown-end ">
              <label tabIndex="0" class="">
                {user ? (
                  <img
                    src={user.photoURL}
                    onClick={handleHide}
                    className="w-8 h-8 rounded-full cursor-pointer"
                    alt=""
                  />
                ) : (
                  <img
                    src={avatar}
                    onClick={handleHide}
                    className="w-8 h-8  cursor-pointer"
                    alt=""
                  />
                )}
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
                      <Link to={"/my-account"}>My Account</Link>
                    </li>
                    {user ? (
                      <Logout />
                    ) : (
                      <>
                        <li>
                          <Link to={"/register"}>Register</Link>
                        </li>
                        <li>
                          <Link to={"/login"}>Login</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
      <Cartmodal cartmodal={cartmodal} />
      <Submenu />
    </nav>
  );
};

export default Navbar;
