import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase.init";
import Loading from "../shere/Loading";
const useUserInfo = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    data: userInfo,
    refetch: userRealod,
  } = useQuery("result", () =>
    fetch(`http://localhost:4000/get-user/${user?.email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return { userInfo, userRealod };
};

export default useUserInfo;
