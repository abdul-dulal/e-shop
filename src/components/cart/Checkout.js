import React from "react";
import useCart from "../hooks/useCart";
import Breadcumb from "../shere/Breadcumb";
const Checkout = () => {
  const { cartInfo } = useCart();

  const price = cartInfo?.map((e) => e.price);
  const totalPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });
  return (
    <div>
      <Breadcumb tag="Checkout" />
      <div className="container flex flex-wrap justify-between  ">
        <div className="space-y-4">
          <h2 className="text-2xl  my-8 font-semibold">Billing Details</h2>
          <div className="flex gap-10">
            <div>
              <label className="block">First Name</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block">Last Name</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <label className="block">Email</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block">Phone</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <label className="block">Zip Code</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block">City</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <label className="block">State</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block">Street Address</label>
              <input
                type="text"
                className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div>
            <label className="block">Country</label>
            <input
              type="text"
              className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl  my-8 font-semibold"> Your order</h2>
          <div className="bg-gray-200 px-5 py-8 rounded-md ">
            <div className="flex justify-between gap-40 mb-8">
              <h2 className="text-xl font-semibold">Product</h2>
              <p className="text-xl font-semibold">Price</p>
            </div>
            <p className="border-solid border-2 border-gray-300 mb-5"></p>
            <div className="">
              {cartInfo.map((e) => (
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
          </div>
          <button className="uppercase bg-purple-600 mt-6 h-12 w-full rounded-full text-white hover:bg-gray-600">
            place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
