import React from "react";
import { useQuery } from "react-query";
import Loading from "../shere/Loading";

const useWishlist = () => {
  const {
    isLoading,
    data: wishlistInfo,
    refetch,
  } = useQuery("repoData", () =>
    fetch("http://localhost:4000/get-allWishlistdata").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return { wishlistInfo, refetch };
};

export default useWishlist;
