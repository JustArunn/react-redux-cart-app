import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const Card = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const call = useDispatch();
  const removeFromCart = () => {
    call(remove(item.id));
    toast.error("Item removed");
  };
  const addToCart = () => {
    call(add(item));
    toast.success("Item Added");
  };
  return (
    <div className="border group hover:scale-110 transition-all duration-150 drop-shadow-2xl w-[250px] p-4 rounded-xl bg-white text-black">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="font-bold text-xl">{item.title.split(" ")[0]}...</p>
        <p>{item.description.split(" ")[0]}...</p>
        <div className="object-cover h-[200px] w-[180px] flex justify-center items-center">
          <img className="h-full w-full" src={item.image} />
        </div>

        <div className="flex justify-between items-center  w-full border-black">
          <p className="font-bold text-green-700">${item.price}</p>
          {cart.some((cartItem) => cartItem.id == item.id) ? (
            <button
              className="border border-[#333]  hover:bg-[#333] transition-all duration-300 px-2 py-1 rounded-full group-hover:bg-[#333] group-hover:text-white "
              onClick={removeFromCart}
            >
              remove Item
            </button>
          ) : (
            <button
              className="border-[2px] border-[#333]  hover:bg-[#333] transition-all duration-300 px-2 py-1 rounded-full group-hover:bg-[#333] group-hover:text-white"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
