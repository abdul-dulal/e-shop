import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";

const VendorDashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="">
      <h2>
        Hello {user?.email.slice(0, -10)}
        <span className="ml-2">
          (not {user?.email.slice(0, -10)}?
          <span className="text-purple-600 underline ml-1">logout</span>)
        </span>
      </h2>
      <button
        onClick={() => navigate("/vendor")}
        className="bg-purple-600 h-9 w-52 mt-10 rounded-sm text-white font-semibold"
      >
        Go to Vendor Dashbarod
      </button>
    </div>
  );
};

export default VendorDashboard;
