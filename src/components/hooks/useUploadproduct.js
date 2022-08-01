import React from "react";
import { useQuery } from "react-query";
import Loading from "../shere/Loading";
const useUploadproduct = (user) => {
  const {
    isLoading,
    data: product,
    refetch: Refetch,
  } = useQuery("productdemo", () =>
    fetch(`http://localhost:4000/get-uploadProduct?user=${user?.email}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return { product, Refetch };
};

export default useUploadproduct;
