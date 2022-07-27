import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcumb from "../../shere/Breadcumb";
import { RiChatFollowUpFill } from "react-icons/ri";
import Profile from "./Profile";

import VendorProduct from "./VendorProduct";
const Singlevendor = () => {
  const [vendor, setvendor] = useState([]);
  const [profile, setprofile] = useState("profile");
  const [follow, setFollow] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/vendor/${id}`)
      .then((res) => res.json())
      .then((data) => setvendor(data));
  }, [id]);

  const handlecFollower = () => {
    setFollow(follow + 1);
    const newVendor = {
      vendor: vendor.name,
      follow: follow,
    };
    fetch("http://localhost:4000/followers", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVendor),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <>
      <Breadcumb tag="Vendor" />
      <div className="container">
        <div className="flex justify-between container mt-10 border-2 p-2">
          <div>
            <img src={vendor.img} className="w-24 h-24 border-2 p-2" alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{vendor.name}</h2>
            <p>followers 1</p>
          </div>
          <div>
            <div
              className="h-24 w-24 border-2 p-2 block cursor-pointer "
              onClick={handlecFollower}
            >
              <span>
                <RiChatFollowUpFill className="text-3xl" />{" "}
                <span className="text-xl ">Follows</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-10 ">
          <button
            onClick={() => setprofile("profile")}
            className={`uppercase  py-2 px-6 text-black font-semibold ${
              profile === "profile" ? "bg-purple-600 rounded-md text-white" : ""
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setprofile("product")}
            className={`uppercase  py-2 px-6 text-black font-semibold ${
              profile === "product" ? "bg-purple-600 rounded-md text-white" : ""
            }`}
          >
            Product
          </button>
        </div>
        {profile === "profile" && <Profile category={vendor.category} />}
        {profile === "product" && <VendorProduct category={vendor.category} />}
      </div>
    </>
  );
};

export default Singlevendor;
