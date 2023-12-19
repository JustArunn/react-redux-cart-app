import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { PiShoppingBagFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="bg-[#0f172a] text-white font-semibold mb-5">
      <nav className="flex justify-around h-[3rem] items-center">
        <div>
          <NavLink to={"/"}>
          <div className="flex items-center">
          <PiShoppingBagFill size={"40px"} />
            <span>Shop</span>
          </div>
          </NavLink>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>
            <FaShoppingCart size={"20px"} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
