import React from "react";
import Hover from "../shere/Hover";
import Loading from "../shere/Loading";

const Productdetails = ({ data, loading }) => {
  const { img, title, price, price2 } = data;

  return (
    <div>
      <>
        <div className=" container mt-10  ">
          <div className="parent ">
            <div class=" rounded-md bg-base-100 shadow-xl w-64 h-96 border-2">
              <img src={img} className="  h-60 pt-3 ml-3 rounded-lg" alt="" />

              <div class=" py-4 px-6  text-base font-semibold ">
                <h2 class="">{title}</h2>

                <div className="flex gap-1">
                  <p>${price}</p>
                  <span>-</span>
                  <p className="line-through">${price2}</p>
                </div>
                <Hover data={data} />

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
        </div>
      </>
    </div>
  );
};

export default Productdetails;
