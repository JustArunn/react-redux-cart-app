import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CartItems = ({ item }) => {
  const call = useDispatch();
  const removeFromCart = () => {
    call(remove(item.id));
    toast.error("Item removed");
  };
  return (
    <div className="flex w-[calc(100%-300px)] border-b mb-3 border-black justify-between items-center">
      <div className="object-cover border-black h-[200px] w-[180px] flex justify-center items-center">
        <img className="h-full w-full mb-3" src={item.image} />
      </div>
      <div>
        <p className="font-bold text-xl">{item.title.split(" ")[0]}</p>
        <p>{item.description.split(" ")[0]}</p>
        <div className="flex  border-black w-[150px] justify-between items-center">
          <p className="font-bold text-green-700">${item.price}</p>
          <button
            className="border bg-[#e84949] rounded-full p-2"
            onClick={removeFromCart}
          >
            <MdDelete size={"25px"} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
