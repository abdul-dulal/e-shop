import React, { useEffect, useState } from "react";
import Hover from "../../shere/Hover";
import Loading from "../../shere/Loading";
import Rattings from "../../shere/Rattings";
const WomenFashion = () => {
  const [wFashion, setwFashion] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3000/get-womenfashion?category=women`)
      .then((res) => res.json())
      .then((data) => {
        setwFashion(data);
        console.log(data);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <div className="flex lg:justify-between justify-center gap-8 flex-wrap container lg:mt-10  overflow-hidden ">
            {wFashion.map((e) => (
              <div className="parent ">
                <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
                  <img
                    src={e.img}
                    className="  h-60 w-11/12 pt-3 ml-3 rounded-lg"
                    alt=""
                  />

                  <div class=" py-4 px-6  text-base font-semibold ">
                    <h2 class="">{e.title}</h2>

                    <div className="flex gap-1">
                      <p>${e.price}</p>
                      <span>-</span>
                      <p className="line-through">${e.price2}</p>
                    </div>
                    <Hover data={e} />
                    {e.ratting ? (
                      <Rattings ratting={e.ratting} />
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

export default WomenFashion;
