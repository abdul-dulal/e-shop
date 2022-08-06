import React, { useEffect, useState } from "react";
import Loading from "../../shere/Loading";
import Hover from "../../../components/shere/Hover";
import "../../style.css";
import Breadcumb from "../../shere/Breadcumb";
import Rattings from "../../shere/Rattings";

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/get-accessories?category=accessories")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="">
      {loading ? (
        <>
          <div className="flex lg:justify-between gap-8 flex-wrap justify-center container mt-10  overflow-hidden ">
            {accessories.map((e) => (
              <div className="parent ">
                <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
                  <img
                    src={e.img}
                    className="  h-60 pt-3 ml-3 rounded-lg"
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

export default Accessories;
