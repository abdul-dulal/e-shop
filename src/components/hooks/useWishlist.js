import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase.init";
import Loading from "../shere/Loading";

const useWishlist = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    data: wishlistInfo,
    refetch,
  } = useQuery("repoData", () =>
    fetch(`http://localhost:3000/get-allWishlistdata?user=${user?.email}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return { wishlistInfo, refetch };
};

export default useWishlist;
