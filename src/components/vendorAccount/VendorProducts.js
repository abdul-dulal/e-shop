import React, { useState } from "react";
import AddProduct from "./AddProduct";

const VendorProducts = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="container">
      <div className="container my-5 flex flex-wrap justify-between">
        <h2> hello</h2>
        <button
          className="bg-purple-600 text-white font-semibold rounded-sm h-10 w-32 cursor-pointer"
          onClick={() => {
            setPopup(true);
          }}
        >
          Add Product
        </button>
      </div>
      <div class="overflow-x-auto mt-4">
        <table class="table w-full">
          <thead>
            <tr>
              <th>IMG</th>
              <th>Name</th>
              <th>PRICE</th>
              <th>Stock</th>
              <th>publish</th>
              <th>acction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddProduct popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default VendorProducts;
