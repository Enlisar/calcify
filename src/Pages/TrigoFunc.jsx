import { LuPi } from "react-icons/lu";
import { FaRegCopy } from "react-icons/fa";
import { useEffect, useState } from "react";

const TrigoFunc = () => {
  const [angleUnit, setAngleUnit] = useState("rad");
  const [angle, setAngle] = useState("0");
  const [dispangle, setDispangle] = useState("0");
  const [results, setResults] = useState({
    sin: "0.00000",
    cos: "1.00000",
    tan: "0.00000",
    cosec: "∞",
    sec: "1.00000",
    cot: "∞",
  });

  const EPSILON = 1e-5;

  const calculateTrig = () => {
    let rawAngle = parseFloat(angle);
    if (isNaN(rawAngle)) return;

    if (angleUnit === "deg") {
      rawAngle = (rawAngle * Math.PI) / 180;
    }

    const sin = Math.sin(rawAngle);
    const cos = Math.cos(rawAngle);
    const tan = Math.tan(rawAngle);

    setResults({
      sin: sin.toFixed(5),
      cos: cos.toFixed(5),
      tan: Math.abs(cos) < EPSILON ? "∞" : tan.toFixed(5),
      cosec: Math.abs(sin) < EPSILON ? "∞" : (1 / sin).toFixed(5),
      sec: Math.abs(cos) < EPSILON ? "∞" : (1 / cos).toFixed(5),
      cot: Math.abs(tan) < EPSILON ? "∞" : (1 / tan).toFixed(5),
    });
  };

  const addPi = () => {
    setDispangle((v) => v + "π");
    setAngle((a) => parseFloat(a) * Math.PI);
  };

  useEffect(() => {
    calculateTrig();
  }, [angle, angleUnit]);

  return (
    <div className=" absolute w-[90%] max-w-[800px] p-4 bg-[#bc9060bb] rounded-lg shadow-xl mt-[-70px]">
      <div className="text-black sm:text-xl text-lg font-semibold text-center flex flex-wrap justify-evenly mb-6 p-2">
        <label
          htmlFor="anglebox"
          className="sm:text-[20px] text-[15px] sm:w-[143px] w-[800px] sm:ml-[0px] ml-[-180px]"
        >
          Enter the angle:
        </label>
        <input
          name="anglebox"
          type="text"
          value={dispangle}
          className="text-[#805d2d] bg-[#e0d3c5] border-2 border-[#805d2d] ml-2 rounded w-[50%]"
          onChange={(e) => {
            setDispangle(e.target.value);
            setAngle(e.target.value);
          }}
        />
        <select
          className="bg-[#805d2d] text-[#bc8f60] text-lg h-[33px] w-[105px] select ml-1"
          onChange={(e) => setAngleUnit(e.target.value)}
          value={angleUnit}
        >
          <option value="rad">Radian</option>
          <option value="deg">Degree</option>
        </select>
        <button
          className="bg-[#805d2d] text-[#bc8f60] h-[33px] w-[33px] p-2 ml-1 shadow-md hover:shadow-xl active:shadow-inner rounded "
          onClick={addPi}
        >
          <LuPi />
        </button>
      </div>

      <div className="text-black sm:text-xl text-lg font-semibold grid grid-cols-1 sm:gap-6 gap-3 px-1 sm:grid-cols-2">
        <div className="bg-[#bc8f60] rounded-md p-1 flex justify-between">
          sin: {results.sin}
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-[#eeba82d6]">
              <div className=" text-black">Copy to clipboard</div>
            </div>
            <button onClick={() => navigator.clipboard.writeText(results.sin)}>
              <FaRegCopy />
            </button>
          </div>
        </div>
        <div className="bg-[#bc8f60] rounded-md p-1 flex justify-between">
          cos: {results.cos}
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-[#eeba82d6]">
              <div className=" text-black">Copy to clipboard</div>
            </div>
            <button onClick={() => navigator.clipboard.writeText(results.cos)}>
              <FaRegCopy />
            </button>
          </div>
        </div>
        <div className="bg-[#bc8f60] rounded-md p-1 flex justify-between">
          tan: {results.tan}
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-[#eeba82d6]">
              <div className=" text-black">Copy to clipboard</div>
            </div>
            <button onClick={() => navigator.clipboard.writeText(results.tan)}>
              <FaRegCopy />
            </button>
          </div>
        </div>
        <div className="bg-[#bc8f60] rounded-md p-1 flex justify-between">
          cosec: {results.cosec}
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-[#eeba82d6]">
              <div className=" text-black">Copy to clipboard</div>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(results.cosec)}
            >
              <FaRegCopy />
            </button>
          </div>
        </div>
        <div className="bg-[#bc8f60] rounded-md p-1 flex justify-between">
          sec: {results.sec}
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-[#eeba82d6]">
              <div className=" text-black">Copy to clipboard</div>
            </div>
            <button onClick={() => navigator.clipboard.writeText(results.sec)}>
              <FaRegCopy />
            </button>
          </div>
        </div>
        <div className="bg-[#bc8f60] rounded-md p-1 flex justify-between">
          cot: {results.cot}
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content bg-[#eeba82d6]">
              <div className=" text-black">Copy to clipboard</div>
            </div>
            <button onClick={() => navigator.clipboard.writeText(results.cot)}>
              <FaRegCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrigoFunc;
