import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import useUserInfo from "../hooks/useUserInfo";
const Address = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { userInfo, userRealod } = useUserInfo();

  const [user] = useAuthState(auth);
  const handleAdded = (data) => {
    const newUser = {
      zip: data.zip,
      address: data.address,
      country: data.country,
      state: data.state,
      city: data.city,
      user: user?.email,
    };
    fetch("http://localhost:3000/post-userInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("successfylly added");
        userRealod();
      });

    reset();
  };

  const handleupdate = (data) => {
    console.log(data.country);
  };

  return (
    <div className="ml-8 lg:mt-0 md:mt-0 mt-14">
      {userInfo?._id ? (
        <form onSubmit={handleSubmit(handleupdate)}>
          <div className="flex lg:gap-10 md:gap-3 gap-4 ">
            <div>
              <label className="font-semibold uppercase">Zip Code</label> <br />
              <input
                type="text"
                defaultValue={userInfo?.zip}
                {...register("zip")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
            <div>
              <label className="font-semibold uppercase">City</label> <br />
              <input
                type="text"
                defaultValue={userInfo?.city}
                {...register("city")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
          </div>
          <div className="flex lg:gap-10 md:gap-3 gap-4 mt-5">
            <div>
              <label className="font-semibold uppercase">State</label> <br />
              <input
                type="text"
                defaultValue={userInfo?.state}
                {...register("state")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
            <div>
              <label className="font-semibold uppercase">Country</label> <br />
              <input
                type="text"
                defaultValue={userInfo?.country}
                {...register("country")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="font-semibold uppercase block">
              state address
            </label>
            <input
              type="text"
              {...register("address")}
              defaultValue={userInfo?.address}
              class=" lg:w-[500px] md:w-[330px] w-[300px] px-2 h-10 mt-3 focus:outline rounded-md  "
            />
          </div>

          <input
            type="submit"
            value="Save Change "
            className="bg-purple-600 hover:bg-gray-600 cursor-pointer text-white px-6 py-2 rounded-sm mt-5 font-semibold "
          />
        </form>
      ) : (
        <form onSubmit={handleSubmit(handleAdded)}>
          <div className="flex lg:gap-10 md:gap-3 gap-4 ">
            <div>
              <label className="font-semibold uppercase">Zip Code</label> <br />
              <input
                type="text"
                {...register("zip")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
            <div>
              <label className="font-semibold uppercase">City</label> <br />
              <input
                type="text"
                {...register("city")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
          </div>
          <div className="flex lg:gap-10 md:gap-3 gap-4 mt-5">
            <div>
              <label className="font-semibold uppercase">State</label> <br />
              <input
                type="text"
                {...register("state")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
            <div>
              <label className="font-semibold uppercase">Country</label> <br />
              <input
                type="text"
                {...register("country")}
                class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="font-semibold uppercase block">
              state address
            </label>
            <input
              type="text"
              {...register("address")}
              defaultValue={userInfo?.address}
              class=" lg:w-[500px] md:w-[330px] w-[300px] px-2 h-10 mt-3 focus:outline rounded-md  "
            />
          </div>

          <input
            type="submit"
            value="Update "
            className="bg-purple-600 hover:bg-gray-600 cursor-pointer text-white px-6 py-2 rounded-sm mt-5 font-semibold "
          />
        </form>
      )}
    </div>
  );
};

export default Address;
