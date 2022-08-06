import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import useUser from "../hooks/useUser";
const Dashborad = () => {
  const [vendor, setVendor] = useState();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/collectVendor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVendor(data));
  }, [user?.email]);

  return (
    <div className="">
      <h2>
        Hello {user?.email?.slice(0, 12)}
        <span>
          (not {user?.email.slice(0, -10)}?
          <span className="text-purple-600 underline">logout</span>)
        </span>
      </h2>

      <div>
        {vendor?.user == user?.email && (
          <button
            onClick={() => navigate("/vendor")}
            className="bg-purple-600 h-9 w-52 mt-10 rounded-sm text-white font-semibold"
          >
            Go to Vendor Dashbarod
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashborad;
