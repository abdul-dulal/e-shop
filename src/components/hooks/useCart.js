import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../shere/Loading";

const WishlistData = () => {
  const {
    isLoading,
    data: cartInfo,
    refetch: reload,
  } = useQuery("demo", () =>
    fetch("http://localhost:4000/get-allcart").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return { cartInfo, reload };
};

export default WishlistData;
