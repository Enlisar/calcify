import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaCalculator, FaMoneyBillAlt, FaBalanceScale } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { LuTriangleRight } from "react-icons/lu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-20 ml-2 w-full bg-none relative self-start text-left p-2">
      <div className="drawer drawer-auto-gutter hover:cursor-default">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="h-[50px] w-[50px] p-0 btn drawer-button text-xl bg-[#c99c5cdb] border-[#805d2d] border-2 hover:bg-[#b48a50] active:bg-[#936d37] active:scale-95 transition duration-[400ms] ease-in-out"
          >
            <Bars3Icon className="h-[35px] w-[35px] text-[#805d2d]" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-[#654a24] bg-[#805d2d] z-50 shadow-md text-sm font-mono text-white min-h-full w-80 p-4">
            <NavLink to="/" className=" mb-4">
              <img src="/logo.png" alt="logo" className="h-[70px] w-[200px]" />
            </NavLink>
            <li>
              <NavLink to="/calculator" className="hover:underline mt-4">
                <FaCalculator />
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/currency-converter" className="hover:underline">
                <FaMoneyBillAlt />
                Currency Converter
              </NavLink>
            </li>
            <li>
              <NavLink to="/unit-converter" className="hover:underline">
                <FaBalanceScale />
                Unit Converter
              </NavLink>
            </li>
            <li>
              <NavLink to="/discount-calculator" className="hover:underline">
                <MdDiscount />
                Discount Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trigonometric-functions"
                className="hover:underline"
              >
                <LuTriangleRight />
                Trigonometric Functions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
