import { Bars3Icon } from "@heroicons/react/24/solid";

const Menu = () => {
  return (
    <div className="h-20 ml-2 w-full bg-none relative top-[-43%] text-left p-2">
      <button className="bg-[#c99c5cdb] border-[#805d2d] border-2 hover:bg-[#c99c5c] active:bg-[#a8824c]">
        <Bars3Icon className="h-10 w-10 text-[#805d2d] " />
      </button>
    </div>
  );
};
export default Menu;
