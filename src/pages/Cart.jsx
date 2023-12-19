import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce((a, b) => a + b.price, 0);
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="flex flex-wrap justify-center items-center w-[65vw] gap-3">
        {cart.length > 0 ? (
          cart.map((item) => <CartItems key={item.id} item={item} />)
        ) : (
          <div className="w-full h-[90vh] flex justify-center items-center flex-col">
            <p className="font-bold text-2xl mb-5 text-[#444]">
              Your Cart is Empty !
            </p>
            <Link
              to={"/"}
              className="text-white font-bold py-3 px-10 rounded-md bg-green-600"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
      {cart.length > 0 ? (
        <div className="w-[32vw] h-full mt-4 p-3">
          <p className="text-2xl font-bold text-green-600">YOUR CART</p>
          <p className="text-4xl mb-5 font-extrabold text-green-600 ">
            SUMMARY
          </p>
          <p className="text-xl font-bold text-[#444]">
            Total Item : {cart.length}{" "}
          </p>
          <br />
          <br />
          <div className="flex flex-col items-baseline">
            <p className="font-extrabold text-xl text-[#444]">
              Total Amout : ${totalAmount}
            </p>
            <button className="w-full h-[3rem] mt-4 font-bold text-white rounded-md bg-green-600">
              Checkout now
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
