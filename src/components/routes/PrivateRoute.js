import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../shere/Loading";
const PrivateRoute = ({ children }) => {
  let location = useLocation();
  let [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
