import { BackspaceIcon } from "@heroicons/react/24/outline";
import { DivideIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { evaluate } from "mathjs";

const Calc = () => {
  const [display, setDisplay] = useState(" ");
  const CaclHandler = (value) => {
    if (Number.isInteger(value) && display.endsWith(")") == false) {
      setDisplay((d) => d + value);
    } else if (
      ["+", "-", "*", "/"].includes(value) &&
      ["+", "-", "*", "/"].includes(display.slice(-1))
    ) {
      setDisplay((d) => d.slice(0, -1) + value);
    } else if (
      ["+", "-", "*", "/", "."].includes(value) &&
      !["+", "-", "*", "/", "(", "."].includes(display.slice(-1))
    ) {
      setDisplay((d) => d + value);
    } else if (value == "C") {
      setDisplay("");
    } else if (
      value == "(" &&
      ["+", "-", "*", "/"].includes(display.slice(-1))
    ) {
      setDisplay((d) => d + value);
    } else if (
      value == ")" &&
      !["+", "-", "/", "*", "(", "."].includes(display.slice(-1))
    ) {
      setDisplay((d) => d + value);
    } else if (value == "delete") {
      setDisplay((display) => display.slice(0, -1));
    } else if (value == "=") {
      let result = evaluate(display);
      setDisplay(result.toString());
    }
  };
  const Key = ({ operator }) => {
    return (
      <div className="but active:bg-[#b1926c] active:scale-95 shadow-md transition-transform duration-100">
        <button
          className="h-full w-full text-[35px] hover:bg-slate-950/5 rounded-md"
          onClick={() => {
            CaclHandler(operator);
          }}
        >
          {operator}
        </button>
      </div>
    );
  };
  const NumKey = ({ number }) => {
    return (
      <div className="but-num active:bg-[#c4b3a1] active:scale-95 shadow-md transition-transform duration-100">
        <button
          className="h-full w-full text-[35px] hover:bg-slate-950/5 rounded-md"
          onClick={() => {
            CaclHandler(number);
          }}
        >
          {number}
        </button>
      </div>
    );
  };
  return (
    <div className="absolute w-[380px] h-[580px] p-2 pb-3 bg-[url(\src\assets\calcBg.jpg)] rounded-md border-[6px] border-[#805d2d]">
      <div className="disp w-[98%] h-[90px] bg-[#e0d3c5] mt-2 mb-2 rounded border-[4.5px] border-[#805d2d] flex justify-end items-center text-[#805d2d] text-[35px] p-1 overflow-hidden">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2 h-[435px]">
        <Key operator={"("} />
        <Key operator={")"} />
        <Key operator={"C"} />
        <Key operator={"+"} />
        <NumKey number={1} />
        <NumKey number={2} />
        <NumKey number={3} />
        <Key operator={"-"} />
        <NumKey number={4} />
        <NumKey number={5} />
        <NumKey number={6} />
        <Key operator={"*"} />
        <NumKey number={7} />
        <NumKey number={8} />
        <NumKey number={9} />
        <div className="but active:bg-[#b1926c] active:scale-95 shadow-md transition-transform duration-100">
          <button
            className="h-full w-full hover:bg-slate-950/5 rounded-md flex justify-center "
            onClick={() => CaclHandler("/")}
          >
            <DivideIcon className="w-[40px] h-[40px] relative top-[17px]" />
          </button>
        </div>
        <Key operator={"."} />
        <NumKey number={0} />
        <div className="but active:bg-[#b1926c] active:scale-95 shadow-md transition-transform duration-100">
          <button
            className="h-full w-full hover:bg-slate-950/5 rounded-md flex justify-center "
            onClick={() => CaclHandler("delete")}
          >
            <BackspaceIcon className="w-[40px] h-[40px] relative top-[17px]" />
          </button>
        </div>
        <Key operator={"="} />
      </div>
    </div>
  );
};

export default Calc;
