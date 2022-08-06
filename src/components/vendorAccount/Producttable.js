import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiTwotoneEdit } from "react-icons/ai";
import cancel from "../../assets/icon/delete.png";
import AddProduct from "./AddProduct";
import useUploadproduct from "../hooks/useUploadproduct";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
const Producttable = ({ product }) => {
  const [popup, setPopup] = useState(false);
  const [editProduct, setEditproduct] = useState();
  const { img, price, price2, title, _id } = product;
  const [user] = useAuthState(auth);
  const { Refetch } = useUploadproduct(user);
  const handleEdit = () => {
    fetch(`http://localhost:3000/edit-product/${_id}`)
      .then((res) => res.json())
      .then((data) => setEditproduct(data));
    setPopup(true);
  };

  const handleRemove = () => {
    fetch(`http://localhost:3000/delete-product/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        Refetch();
        toast("Delete Product");
      });
  };

  return (
    <>
      <tr>
        <th>
          <img src={img} className="w-20 h-20" alt="" />
        </th>
        <td>{title}</td>
        <td className="space-x-2">
          <span>${price}</span>
          <span>-</span>
          <span className="line-through ">${price2}</span>
        </td>
        <td> In Stock</td>

        <td>
          <div className="flex items-center">
            <td
              className="text-2xl cursor-pointer text-purprle-200 font-semibold"
              onClick={() => handleEdit(_id)}
            >
              <AiTwotoneEdit />
            </td>
            <img
              src={cancel}
              className="w-7 h-7 cursor-pointer "
              onClick={() => handleRemove(_id)}
              alt=""
            />
          </div>
        </td>
      </tr>
      <AddProduct
        popup={popup}
        setPopup={setPopup}
        editProduct={editProduct}
        title="Update"
      />
    </>
  );
};

export default Producttable;
