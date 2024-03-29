import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import useCart from "../hooks/useCart";
import useUserInfo from "../hooks/useUserInfo";
import Breadcumb from "../shere/Breadcumb";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Payment from "../shere/Payment";

const Checkout = () => {
  const { cartInfo } = useCart();
  const [user] = useAuthState(auth);

  const { userInfo } = useUserInfo();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const price = cartInfo?.map((e) => e.price);
  const totalPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });
  const onSubmit = (data) => {
    navigate("/checkout-method");
  };

  return (
    <div>
      <Breadcumb tag="Checkout" />
      <div className="">
        <h2 className="text-2xl  my-8 font-semibold container">
          Billing Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap justify-between  gap-12   container">
            <div>
              <div className="flex gap-5 my-3">
                <div>
                  <label className="block my-2">First Name</label>
                  <input
                    type="text"
                    {...register("fname", {
                      required: {
                        value: true,
                        message: "Please Enter  first name ",
                      },
                    })}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <label>
                  {errors.fname?.type === "required" && (
                    <span className="label-text-alt text-red-500 text-xl">
                      {errors.message}
                    </span>
                  )}
                </label>
                <div>
                  <label className="block my-2">Last Name</label>
                  <input
                    type="text"
                    {...register("lname", {
                      required: {
                        value: true,
                        message: "Please Enter Last name",
                      },
                    })}
                    className="  md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <label>
                    {errors.lname?.type === "required" && (
                      <span className="label-text-alt text-red-500 text-xl">
                        {errors.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex gap-10 my-3">
                <div>
                  <label className="block my-2">Email</label>
                  <input
                    type="text"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please Enter Email",
                      },
                    })}
                    defaultValue={userInfo ? user?.email : ""}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <label>
                    {" "}
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500 text-xl">
                        {errors.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block my-2">Phone</label>
                  <input
                    type="text"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Please Enter Phone number",
                      },
                    })}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <label>
                    {errors.phone?.type === "required" && (
                      <span>{errors.message}</span>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex gap-10 my-3">
                <div>
                  <label className="block my-2">Zip Code</label>
                  <input
                    type="text"
                    {...register("zip", {
                      required: {
                        value: true,
                        message: "Please Enter zip code",
                      },
                    })}
                    defaultValue={userInfo ? userInfo.zip : ""}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <label>
                    {errors.zip?.type === "required" && (
                      <span>{errors.message}</span>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block my-2">City</label>
                  <input
                    type="text"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "Please Enter city",
                      },
                    })}
                    defaultValue={userInfo ? userInfo.city : ""}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <label>
                    {errors.city?.type === "required" && (
                      <span>{errors.message}</span>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex gap-10 my-3">
                <div>
                  <label className="block my-2">State</label>
                  <input
                    {...register("state", {
                      required: {
                        value: true,
                        message: "Please Enter state",
                      },
                    })}
                    type="text"
                    defaultValue={userInfo ? userInfo.state : ""}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <label>
                    {errors.state?.type === "required" && (
                      <span>{errors.message}</span>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block my-2">Street Address</label>
                  <input
                    type="text"
                    defaultValue={userInfo ? userInfo.address : ""}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div>
                <label className="block my-2">Country</label>
                <input
                  type="text"
                  {...register("country")}
                  defaultValue={userInfo ? userInfo.country : ""}
                  className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl    font-semibold"> Your order</h2>
              <div className="bg-gray-200 px-5 py-8 rounded-md ">
                <div className="flex justify-between gap-40 mb-8">
                  <h2 className="text-xl font-semibold">Product</h2>
                  <p className="text-xl font-semibold">Price</p>
                </div>
                <p className="border-solid border-2 border-gray-300 mb-5"></p>
                <div className="">
                  {cartInfo?.map((e) => (
                    <div className="flex justify-between gap-4 space-y-6">
                      <h2>{e.name}</h2>
                      <p>$ {e.price}</p>
                    </div>
                  ))}
                </div>
                <p className="border-solid border-2 border-gray-300 my-5"></p>

                <div className="flex  justify-between">
                  <p className="">Shiping</p>
                  <p className=" ">Free Shiping</p>
                </div>
                <p className="border-solid border-2 border-gray-300 my-5"></p>
                <div className="flex  justify-between">
                  <p className="text-2xl">Total</p>
                  <p className="text-2xl text-purple-600"> $ {totalPrice}</p>
                </div>
                <input
                  type="submit"
                  value="Place order"
                  className="uppercase bg-purple-600 mt-6 cursor-pointer h-12 w-full rounded-full text-white hover:bg-gray-600"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Payment total={totalPrice} />
    </div>
  );
};

export default Checkout;
