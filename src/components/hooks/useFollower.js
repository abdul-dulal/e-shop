import React from "react";
import { useQuery } from "react-query";
import Loading from "../shere/Loading";

const useFollower = (id) => {
  const {
    isLoading,
    data: followers,
    refetch: followerRefetch,
  } = useQuery("productdemo", () =>
    fetch(`http://localhost:4000/vendor/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return { followers, followerRefetch };
};

export default useFollower;
