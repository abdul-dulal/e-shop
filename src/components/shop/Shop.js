import React, { useEffect, useState } from "react";
import Accessories from "../home/category/Accessories";
import Clening from "../home/category/Clening";
import Cooking from "../home/category/Cooking";
import Electical from "../home/category/Electical";
import Flower from "../home/category/Flower";
import Food from "../home/category/Food";
import Health from "../home/category/Health";
import LifeStyle from "../home/category/LifeStyle";
import MenFashion from "../home/category/MenFashion";
import Sports from "../home/category/Sports";
import Toys from "../home/category/Toys";
import WomenFashion from "../home/category/WomenFashion";
import Breadcumb from "../shere/Breadcumb";
import Productdetails from "./Productdetails";

const Shop = () => {
  const [data, setData] = useState([]);
  const [accessories, setaccessories] = useState("");
  const [fashion, setFashion] = useState("");
  const [food, setFood] = useState("");
  const [eletronic, setEletronic] = useState("");
  const [mFashion, setMfashion] = useState("");
  const [cooking, setCooking] = useState("");
  const [clening, setClening] = useState("");
  const [flower, setFlower] = useState("");
  const [healthy, setHealthy] = useState("");
  const [sport, setSport] = useState("");
  const [style, setStyle] = useState("");
  const [toys, setToys] = useState("");
  const [searchTerm, setSearchTerm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/get-product")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Breadcumb />
      <div className="flex container">
        <div className="w-80">
          <h2 className="text-2xl mt-4">Search</h2>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 h-10 w-60 rounded-sm shadow-sm placeholder:purple-600 px-3 mt-3  border-gray-200 "
            placeholder="Search Product..."
          />
          <h2 className="text-2xl mt-4">Categories</h2>
          <div className="space-y-2">
            <div className="">
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  onClick={() => setaccessories(!accessories)}
                />
                <span className="font-semibold ml-2">
                  Electronic Accessories
                </span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setClening(!clening)} />
                <span className="font-semibold ml-2">Clening</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setCooking(!cooking)} />
                <span className="font-semibold ml-2">Cooking</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setFashion(!fashion)} />
                <span className="font-semibold ml-2">Women's Fashion</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setFlower(!flower)} />
                <span className="font-semibold ml-2">Flower</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setFood(!food)} />
                <span className="font-semibold ml-2">Food</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setHealthy(!healthy)} />
                <span className="font-semibold ml-2">Health &amp; Beauty</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  onClick={() => setEletronic(!eletronic)}
                />
                <span className="font-semibold ml-2">Eletronic</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setSport(!sport)} />
                <span className="font-semibold ml-2">Sport</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setMfashion(!mFashion)} />
                <span className="font-semibold ml-2">Men`s Fashion</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setStyle(!style)} />
                <span className="font-semibold ml-2">Home &amp; Lifestyle</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" onClick={() => setToys(!toys)} />
                <span className="font-semibold ml-2">Toys &amp; toys</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          {accessories === true && <Accessories />}
          {accessories === "cleing" && <Clening />}
          {fashion === true && <WomenFashion />}
          {food === true && <Food />}
          {eletronic === true && <Electical />}
          {mFashion === true && <MenFashion />}
          {cooking === true && <Cooking />}
          {clening === true && <Clening />}
          {flower === true && <Flower />}
          {healthy === true && <Health />}
          {sport === true && <Sports />}
          {style === true && <LifeStyle />}
          {toys === true && <Toys />}
          {accessories ||
          fashion ||
          food ||
          mFashion ||
          cooking ||
          clening ||
          flower ||
          healthy ||
          sport ||
          style ||
          toys ? (
            ""
          ) : (
            <div className={`grid grid-cols-3  `}>
              {data
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.title?.toLowerCase().includes(searchTerm?.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <Productdetails
                      key={val._id}
                      value={val}
                      searchTerm={searchTerm}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
