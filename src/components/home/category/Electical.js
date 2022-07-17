import React, { useEffect, useState } from "react";
import Breadcumb from "../../shere/Breadcumb";
import Hover from "../../shere/Hover";
import Loading from "../../shere/Loading";

const Electical = () => {
  const [electronics, setEletronic] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/get-electronic?category=electronic`)
      .then((res) => res.json())
      .then((data) => {
        setEletronic(data);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      <Breadcumb />
      {loading ? (
        <>
          <div className="flex lg:justify-between justify-center gap-8 flex-wrap  container mt-10  overflow-hidden ">
            {electronics.map((electronic) => (
              <div className="parent ">
                <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
                  <img
                    src={electronic.img}
                    className="  h-60 pt-3 ml-3 rounded-lg"
                    alt=""
                  />

                  <div class=" py-4 px-6  text-base font-semibold ">
                    <h2 class="">{electronic.title}</h2>

                    <div className="flex gap-1">
                      <p>${electronic.price}</p>
                      <span>-</span>
                      <p className="line-through">${electronic.price2}</p>
                    </div>
                    <Hover id={electronic._id} />
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

export default Electical;
