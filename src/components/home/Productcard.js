import React, { useEffect, useState } from "react";
import useReviews from "../hooks/useReviews";
import Hover from "../shere/Hover";
import Loading from "../shere/Loading";
import Rattings from "../shere/Rattings";

const Productcard = () => {
  const [products, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { reviews } = useReviews();
  useEffect(() => {
    fetch("http://localhost:4000/get-bestSelling?highlights=best")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className="flex lg:justify-between gap-8 flex-wrap justify-center container mt-10  overflow-hidden ">
            {products.map((product) => (
              <div className="parent ">
                <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
                  <img
                    src={product.img}
                    className="  h-60 pt-3 ml-3 rounded-lg"
                    alt=""
                  />

                  <div class=" py-4 px-6  text-base font-semibold ">
                    <h2 class="">{product.title}</h2>

                    <div className="flex gap-1">
                      <p>${product.price}</p>
                      <span>-</span>
                      <p className="line-through">${product.price2}</p>
                    </div>
                    <Hover data={product} />
                    {product.ratting ? (
                      <Rattings ratting={product.ratting} />
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

export default Productcard;
