import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Breadcumb from "../shere/Breadcumb";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "../../components/shere/Loading";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { toast } from "react-toastify";
const Register = () => {
  const [agree, setAgree] = useState(false);
  const [verified, setVerified] = useState(false);
  console.log(agree);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };
  if (user) {
    return navigate("/");
  }

  if (loading) {
    return <Loading />;
  }
  const hadleCapctha = () => {
    setVerified(true);
  };
  return (
    <div className="h-screen">
      <Breadcumb />
      <div className="text-center text-2xl font-bold text-purple-600 py-8 space-x-2">
        <button onClick={() => navigate("/register")}>Register</button>
        <span>|</span>
        <button className="text-black" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      <div className="container  w-full flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold uppercase ">Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "add special digit",
              },
            })}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <label>
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label>
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
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
          <br />
          <label className="font-semibold uppercase">Password</label>
          <br />
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
            className="border-2 border-gray-400 w-80 h-12 px-3  my-2 placeholder:text-purple-400 bg-white rounded-md focus:ring"
          />
          <label>
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
          </label>
          <label>
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
          </label>

          <br />
          <div className="my-4">
            <p className="my-4">RECAPTCHA</p>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={hadleCapctha}
            />
          </div>
          <label>
            <input
              type="checkbox"
              className="my-4"
              onClick={() => setAgree(!agree)}
            />
            <span
              className={`ml-3 ${agree ? "text-green-700" : "text-red-700"}`}
            >
              I agree to the privacy policy
            </span>
          </label>
          <br />
          <input
            disabled={!verified || !agree}
            type="submit"
            value="Register"
            className={`w-80 h-12 bg-purple-600 text-white rounded-md cursor-pointer `}
          />
        </form>
      </div>
    </div>
  );
};
export default Register;
