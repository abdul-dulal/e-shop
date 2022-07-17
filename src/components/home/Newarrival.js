import React, { useEffect, useState } from "react";
import Hover from "../shere/Hover";
import Loading from "../shere/Loading";

const Newarrival = () => {
  const [products, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/get-bestSelling?highlights=new")
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
          <div className="flex lg:justify-between gap-9 flex-wrap justify-center container mt-10  overflow-hidden ">
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
                    <div className="flex">
                      <span
                        class
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          display: "block",
                          color: "red",
                          fontSize: "20px",
                        }}
                      >
                        ★
                      </span>
                      <span
                        class
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          display: "block",
                          color: "red",
                          fontSize: "20px",
                        }}
                      >
                        ★
                      </span>
                      <span
                        class
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          display: "block",
                          color: "red",
                          fontSize: "20px",
                        }}
                      >
                        ★
                      </span>
                      <span
                        class
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          display: "block",
                          color: "red",
                          fontSize: "20px",
                        }}
                      >
                        ★
                      </span>
                      <span
                        class
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          display: "block",
                          color: "red",
                          fontSize: "20px",
                        }}
                      >
                        ★
                      </span>
                    </div>
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

export default Newarrival;
