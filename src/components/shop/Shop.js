import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Accessories from "../home/category/Accessories";
import Clening from "../home/category/Clening";
import WomenFashion from "../home/category/WomenFashion";
import Breadcumb from "../shere/Breadcumb";
import Loading from "../shere/Loading";
import Productdetails from "./Productdetails";

const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryShow, setcategoryshow] = useState("");
  const [inputdata, setinputdata] = useState();
  console.log(inputdata);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let result = await fetch("http://localhost:4000/get-product");
    result = await result.json();
    setData(result);
  };

  return (
    <>
      <Breadcumb />
      <div className="flex container">
        <div className="w-80">
          <h2 className="text-2xl mt-4">Categories</h2>
          <div>
            <input
              type="checkbox"
              onClick={() => setcategoryshow("accessories")}
            />
            <span className="font-semibold">Electronic Accessories</span>
          </div>
          <div>
            <input type="checkbox" onClick={() => setcategoryshow("clening")} />
            <span className="font-semibold">Clening</span>
          </div>
          <div>
            <input type="checkbox" onClick={() => setcategoryshow("women")} />
            <span className="font-semibold">Women's Fashion</span>
          </div>
        </div>

        {categoryShow === "accessories" && <Accessories />}
        {categoryShow === "cleing" && <Clening />}
        {categoryShow === "women" && <WomenFashion />}
        <div className="grid grid-cols-3 ">
          {data.map((data) => (
            <Productdetails key={data._id} data={data} loading={loading} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
