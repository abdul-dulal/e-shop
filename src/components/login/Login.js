import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Breadcumb from "../shere/Breadcumb";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/shere/Loading";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let errorElement = "";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, FLoading, fError] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
    errorElement = error.message;
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (user || gUser || fUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading || FLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <Breadcumb tag="Login" />
      <div className="text-center text-2xl font-bold text-purple-600 py-8 space-x-2">
        <button onClick={() => navigate("/register")}>Register</button>
        <span>|</span>
        <button className="text-black" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      <div className="container  ">
        <div className="w-full flex items-center justify-center">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="font-semibold uppercase  block">Email</label>

              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please Enter Email",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "add special digit",
                    },
                  })}
                  className="input input-bordered input-accent my-3 w-full max-w-xs"
                />
              </div>
              <label>
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors.email.message}.
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500  ">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label>
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label className="font-semibold uppercase block my-3">
                Password
              </label>
              <div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  {...register(
                    "password",
                    {
                      required: {
                        value: true,
                        message: "Pawssword is Required",
                      },
                    },
                    {
                      minLength: {
                        value: 6,
                        message: "Password must be 6 character",
                      },
                    }
                  )}
                  className="border-2 border-gray-400 w-80 h-12 px-3   placeholder:text-purple-400 bg-white rounded-md focus:ring"
                />
              </div>
              <label>
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label>
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <div className="flex justify-between my-3">
                <p>Remember Me</p>
                <p>Forget Password?</p>
              </div>

              <input
                type="submit"
                value="Register"
                className={`w-80 h-12 bg-purple-600 text-white rounded-md mt-3 cursor-pointer 
`}
              />
              <p className="text-xl text-red-700">{errorElement.slice(16)}</p>
              <div class="divider">OR</div>
            </form>
          </div>
        </div>

        <div className=" lg:ml-[520px] md:ml-[185px] ml-8">
          <button
            onClick={() => signInWithGoogle()}
            className="flex justify-center items-center  text-black bg-white shadow-lg border-2  uppercase h-14 input input-bordered input-accent w-full max-w-xs"
          >
            <FcGoogle className="text-3xl" />
            <span className="ml-4 font-semibold">google</span>
          </button>
          <button
            onClick={() => signInWithFacebook()}
            className="flex justify-center items-center  text-black bg-white shadow-lg border-2  uppercase h-14 input input-bordered input-accent w-full max-w-xs mt-3"
          >
            <FaFacebookF className="text-3xl text-[#3A559F]" />{" "}
            <span className="ml-4 font-semibold">facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
