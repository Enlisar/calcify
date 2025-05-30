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
      (value == "+" ||
        value == "-" ||
        value == "*" ||
        value == "/" ||
        value == ".") &&
      display.endsWith("+") == false &&
      display.endsWith("-") == false &&
      display.endsWith("/") == false &&
      display.endsWith("*") == false &&
      display.endsWith("(") == false &&
      display.endsWith(".") == false
    ) {
      setDisplay((d) => d + value);
    } else if (value == "C") {
      setDisplay("");
    } else if (
      value == "(" &&
      (display.endsWith("+") ||
        display.endsWith("-") ||
        display.endsWith("*") ||
        display.endsWith("/"))
    ) {
      setDisplay((d) => d + value);
    } else if (
      value == ")" &&
      display.endsWith("+") == false &&
      display.endsWith("-") == false &&
      display.endsWith("/") == false &&
      display.endsWith("*") == false &&
      display.endsWith("(") == false &&
      display.endsWith(".") == false
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
          className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md"
          // onClick={OpClick}
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
          className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md"
          // onClick={NumClick}
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
    <div className="absolute w-[30vw] h-100 p-2 pb-3 bg-[url(E:\Coding\Js\React\calculator\src\assets\bg.jpg)] rounded-md border-[0.7vw] border-[#805d2d]">
      <div className="disp w-[98%] h-[8vw] bg-[#e0d3c5] mt-2 mb-2 rounded border-[0.7vw] border-[#805d2d] flex justify-end items-center text-[#805d2d] text-[2.5vw]">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
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
            className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md flex justify-center "
            onClick={() => CaclHandler("/")}
          >
            <DivideIcon className="w-[2.5vw] h-[2.5vw] relative top-[1.4vw]" />
          </button>
        </div>
        <Key operator={"."} />
        <NumKey number={0} />
        <div className="but active:bg-[#b1926c] active:scale-95 shadow-md transition-transform duration-100">
          <button
            className="text-[2.5vw] h-full w-full hover:bg-slate-950/5 rounded-md flex justify-center "
            onClick={() => CaclHandler("delete")}
          >
            <BackspaceIcon className="w-[3vw] h-[3vw] relative top-[1vw]" />
          </button>
        </div>
        <Key operator={"="} />
      </div>
    </div>
  );
};

export default Calc;
