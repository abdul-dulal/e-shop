import React from "react";
import Hover from "../../shere/Hover";
import useVendor from "../../hooks/useVendor";

const VendorProduct = ({ user }) => {
  const { products } = useVendor(user);
  console.log(products);
  return (
    <div>
      <div className="">
        {products.length > 0 ? (
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
                      <div className="mt-3">
                        <p>{product.ratting == 1 ? "⭐" : ""} </p>
                        <p>{product.ratting == 2 ? "⭐★" : ""} </p>
                        <p>{product.ratting == 3 ? "⭐⭐⭐★★" : ""} </p>
                        <p>{product.ratting == 4 ? "⭐⭐⭐⭐★" : ""} </p>
                        <p>{product.ratting == 5 ? "⭐⭐⭐⭐⭐" : ""} </p>
                      </div>
                    ) : (
                      <p className="mt-3">★★★★★</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-2xl mt-10 text-center"> There are no product</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorProduct;
