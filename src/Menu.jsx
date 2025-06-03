import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaCalculator } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { LuTriangleRight } from "react-icons/lu";

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
          <ul className="menu [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-[#654a24] bg-[#805d2d] z-50 shadow-md text-sm font-mono text-base-content min-h-full w-80 p-4">
            <a href="#" className=" mb-4">
              <img
                src="./src/assets/logo.png"
                alt="logo"
                className="h-[70px] w-[200px]"
              />
            </a>
            <div className="collapse collapse-arrow bg-[#805d2d]">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Theme</div>
              <div className="collapse-content text-sm">
                <fieldset className="fieldset">
                  <label className="flex gap-2 cursor-pointer items-center">
                    <input
                      type="radio"
                      name="theme-radios"
                      className="radio radio-sm theme-controller"
                      value="default"
                    />
                    Wooden
                  </label>
                  <label className="flex gap-2 cursor-pointer items-center">
                    <input
                      type="radio"
                      name="theme-radios"
                      className="radio radio-sm theme-controller"
                      value="retro"
                    />
                    Light
                  </label>
                  <label className="flex gap-2 cursor-pointer items-center">
                    <input
                      type="radio"
                      name="theme-radios"
                      className="radio radio-sm theme-controller"
                      value="cyberpunk"
                    />
                    Dark
                  </label>
                </fieldset>
              </div>
            </div>
            <li>
              <a href="#" className="hover:underline">
                <FaCalculator />
                Calculator
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaMoneyBillAlt />
                Currency Converter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaBalanceScale />
                Unit Converter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <MdDiscount />
                Discount Calculator
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <LuTriangleRight />
                Trigonometric Functions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
