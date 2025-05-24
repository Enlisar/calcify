import { useState } from "react";
import "./App.css";
import { BackspaceIcon } from "@heroicons/react/24/outline";
import { DivideIcon } from "@heroicons/react/24/outline";

const Key = ({ number }) => {
  return (
    <div className="but active:bg-[#b1926c] active:scale-95 shadow-md transition-transform duration-100">
      <button className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md">
        {number}
      </button>
    </div>
  );
};
const NumKey = ({ number }) => {
  return (
    <div className="but-num active:bg-[#c4b3a1] active:scale-95 shadow-md transition-transform duration-100">
      <button className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md">
        {number}
      </button>
    </div>
  );
};

const Num = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(E:\Coding\Js\React\calculator\src\assets\wood.jpg)]">
      <div className="w-[30vw] h-100 p-2 pb-3 bg-[url(E:\Coding\Js\React\calculator\src\assets\bg.jpg)] rounded-md border-[0.7vw] border-[#805d2d]">
        <div className="w-[98%] h-[8vw] bg-[#e0d3c5] mt-2 mb-2 rounded border-[0.7vw] border-[#805d2d] flex justify-end items-center text-[#805d2d] text-[2.5vw]"></div>
        <div className="grid grid-cols-4 gap-2">
          <Key number={"("} />
          <Key number={")"} />
          <Key number={"C"} />
          <Key number={"+"} />
          <NumKey number={1} />
          <NumKey number={2} />
          <NumKey number={3} />
          <Key number={"-"} />
          <NumKey number={4} />
          <NumKey number={5} />
          <NumKey number={6} />
          <Key number={"*"} />
          <NumKey number={7} />
          <NumKey number={8} />
          <NumKey number={9} />
          <div className="but active:bg-[#b1926c] active:scale-95 shadow-md transition-transform duration-100">
            <button className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md flex justify-center ">
              <DivideIcon className="w-[2.5vw] h-[2.5vw] relative top-[1.4vw]" />
            </button>
          </div>
          <Key number={"."} />
          <NumKey number={0} />
          <div className="but active:bg-[#b1926c] active:scale-95 shadow-md transition-transform duration-100">
            <button className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md flex justify-center ">
              <BackspaceIcon className="w-[3vw] h-[3vw] relative top-[1vw]" />
            </button>
          </div>
          <Key number={"="} />
        </div>
      </div>
    </div>
  );
};
const App = () => {
  return <Num />;
};

export default App;
