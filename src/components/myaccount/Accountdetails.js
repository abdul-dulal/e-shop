import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import { useForm } from "react-hook-form";
import useUserInfo from "../hooks/useUserInfo";
import { toast } from "react-toastify";
const Accountdetails = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { userInfo } = useUserInfo();

  const handleChange = (data) => {};
  return (
    <div className="ml-8 lg:mt-0 md:mt-0 mt-14">
      <div className="w-24 flex lg:ml-40 md:ml-20 ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={user?.photoURL} className="rounded-full" alt="" />
      </div>
      <p className=" border-2 mt-5 bg-gray-400 lg:w-[500px] w-[300px]"></p>
      <form onSubmit={handleSubmit(handleChange)}>
        <div>
          <div className="flex gap-4 mt-10">
            <div>
              <label className="font-semibold uppercase block">
                First Name
              </label>
              <input
                {...register("first")}
                type="text"
                placeholder="Jhon"
                class=" lg:w-[230px] md:w-44 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
            <div>
              <label className="font-semibold uppercase block">Last Name</label>{" "}
              <input
                {...register("last")}
                type="text"
                placeholder="Doe"
                class=" lg:w-[230px] md:w-44 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="font-semibold uppercase block">Email</label>
          <input
            value={user?.email}
            readOnly
            type="text"
            class=" lg:w-[500px] md:w-[362px] w-[300px] px-2 h-10 mt-3 focus:outline rounded-md  "
          />
        </div>
        <div className="mt-5">
          <label className="font-semibold uppercase block">Phone</label>
          <input
            {...register("phone")}
            type="number"
            class=" lg:w-[500px] md:w-[362px] w-[300px] px-2 h-10 mt-3 focus:outline rounded-md  "
          />
        </div>
        <div className="flex gap-5">
          <input
            type="submit"
            value="  Save Change"
            className="bg-purple-600 hover:bg-gray-600 cursor-pointer text-white px-6 py-2 rounded-sm mt-5 font-semibold"
          />

          <button
            onClick={() => navigate("/my-account/edit-password")}
            className="bg-red-600 hover:bg-gray-600 text-white px-6 py-2 rounded-sm mt-5 font-semibold"
          >
            Change password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Accountdetails;
