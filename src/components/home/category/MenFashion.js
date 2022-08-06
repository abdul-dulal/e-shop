import React, { useEffect, useState } from "react";

import Hover from "../../shere/Hover";
import Loading from "../../shere/Loading";
import Rattings from "../../shere/Rattings";

const MenFashion = () => {
  const [fashions, setwFashion] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/get-mensFashion?category=men")
      .then((res) => res.json())
      .then((data) => {
        setwFashion(data);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <div className="flex lg:justify-between gap-8 flex-wrap justify-center container mt-10  overflow-hidden ">
            {fashions.map((fashion) => (
              <div className="parent ">
                <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
                  <img
                    src={fashion.img}
                    className="  h-60 w-11/12 pt-3 ml-3 rounded-lg"
                    alt=""
                  />

                  <div class=" py-4 px-6  text-base font-semibold ">
                    <h2 class="">{fashion.title}</h2>

                    <div className="flex gap-1">
                      <p>${fashion.price}</p>
                      <span>-</span>
                      <p className="line-through">${fashion.price2}</p>
                    </div>
                    <Hover data={fashion} />
                    {fashion.ratting ? (
                      <Rattings ratting={fashion.ratting} />
                    ) : (
                      <p className="mt-3">★★★★★</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MenFashion;
