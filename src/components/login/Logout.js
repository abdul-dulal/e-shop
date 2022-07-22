import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../Firebase.init";
const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
