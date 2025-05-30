import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const menuClick = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="h-20 ml-2 w-full bg-none relative top-[-43%] text-left p-2">
      <button
        className="bg-[#c99c5cdb] border-[#805d2d] border-2 hover:bg-[#c99c5c] active:bg-[#a8824c] active:scale-95 transition-transform duration-100"
        onClick={menuClick}
      >
        <Bars3Icon className="h-10 w-10 text-[#805d2d] " />
      </button>
    </div>
  );
};
export default Menu;
