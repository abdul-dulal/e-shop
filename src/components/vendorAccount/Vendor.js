import React from "react";
import Breadcumb from "../shere/Breadcumb";
import { Link, NavLink, Outlet } from "react-router-dom";

const Vendor = () => {
  return (
    <div>
      <Breadcumb tag="Myaccount" />
      <div className="lg:px-32 md:px-10  mt-20">
        <div className="lg:flex bg-gray-200  gap-10 py-16  ">
          <div className="bg-gray-700 p-5 lg:ml-10 w-48 md:ml-64 ml-24 rounded-sm">
            <ul className="">
              <li className=" hover:bg-purple-600 border  cursor-pointer ">
                <NavLink
                  to="/vendor"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm text-gray-200 "
                >
                  Dashboard
                </NavLink>
              </li>
              <li className=" hover:bg-purple-600 border border-gray-300   cursor-pointer ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#9333EA",
                        }
                      : { color: "" }
                  }
                  to="/vendor/products"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm   text-gray-200"
                >
                  Prodcuts
                </NavLink>
              </li>
              <li className=" hover:bg-purple-600 border border-gray-300   cursor-pointer ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#9333EA",
                        }
                      : { color: "" }
                  }
                  to="/vendor/visit-store"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm  text-gray-200"
                >
                  Visit Store
                </NavLink>
              </li>
              <li className=" hover:bg-purple-600 border border-gray-300   cursor-pointer ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#9333EA",
                        }
                      : { color: "" }
                  }
                  to="/vendor/settings"
                  className=" flex justify-center items-center h-10 w-36 rounded-sm text-gray-200"
                >
                  Settings
                </NavLink>
              </li>
              <li className=" hover:bg-purple-600 border border-gray-300   cursor-pointer ">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#9333EA",
                        }
                      : { color: "" }
                  }
                  to="/vendor/logout"
                  className=" flex justify-center items-center h-10   w-36 rounded-sm text-gray-200"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
