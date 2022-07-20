import React, { useEffect, useState } from "react";
import Hover from "../../shere/Hover";
import Loading from "../../shere/Loading";
const WomenFashion = () => {
  const [wFashion, setwFashion] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:4000/get-womenfashion?category=women`)
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
          <div className="flex lg:justify-between justify-center gap-8 flex-wrap container lg:mt-10  overflow-hidden ">
            {wFashion.map((e) => (
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

export default WomenFashion;
