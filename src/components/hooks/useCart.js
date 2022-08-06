import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase.init";
import Loading from "../shere/Loading";

const WishlistData = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    data: cartInfo,
    refetch: reload,
  } = useQuery("demo", () =>
    fetch(`http://localhost:3000/get-allcart?user=${user?.email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  return { cartInfo, reload };
};

export default WishlistData;
