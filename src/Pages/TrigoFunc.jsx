import { LuPi } from "react-icons/lu";
import { useState, useRef } from "react";

const TrigoFunc = () => {
  const [angleUnit, setAngleUnit] = useState("rad");
  const [angle, setAngle] = useState(0);
  const [dispangle, setDispangle] = useState(0);
  const addPi = () => {
    setDispangle((v) => v + "π");
    setAngle((a) => a * Math.PI);
  };

  let angleVal = parseFloat(angle);
  let sin = Math.sin(angleVal).toFixed(5);
  let cos = Math.cos(angleVal).toFixed(5);
  let tan = Math.tan(angleVal).toFixed(5);
  let sec = (1 / Math.cos(angleVal)).toFixed(5);
  let cosec = (1 / Math.sin(angleVal)).toFixed(5);
  let cot = (1 / Math.tan(angleVal)).toFixed(5);

  if (angleUnit === "deg") {
    angleVal = (angleVal * Math.PI) / 180;
    sin = Math.sin(angleVal).toFixed(5);
    cos = Math.cos(angleVal).toFixed(5);
    tan = Math.tan(angleVal).toFixed(5);
    sec = (1 / Math.cos(angleVal)).toFixed(5);
    cosec = (1 / Math.sin(angleVal)).toFixed(5);
    cot = (1 / Math.tan(angleVal)).toFixed(5);
  }

  console.log(angleUnit);
  return (
    <div className="absolute sm:w-[600px] sm:h-[400px] p-2 pb-3 bg-[#bc9060bb] rounded w-[300px] h-[550px]">
      <div className="text-black sm:text-xl text-lgfont-semibold text-center mb-7 flex ml-2 mt-7">
        <label htmlFor="anglebox">Enter the angle: </label>
        <br />
        <input
          name="anglebox"
          type="text"
          value={dispangle}
          className="text-[#805d2d] bg-[#e0d3c5] border-2 border-[#805d2d] ml-2 rounded"
          onChange={(e) => {
            setDispangle(e.target.value);
            setAngle(e.target.value);
            calculateTrig();
          }}
        />
        <select
          className="bg-[#805d2d] text-[#bc8f60] text-lg h-[33px] w-[120px] select ml-2"
          onChange={(e) => setAngleUnit(e.target.value)}
        >
          <option value="rad">Radian</option>
          <option value="deg">Degree</option>
        </select>
        <button
          className="bg-[#805d2d] text-[#bc8f60] h-[33px] w-[33px] p-2 ml-2 shadow-md hover:shadow-xl active:shadow-inner rounded"
          onClick={addPi}
        >
          <LuPi />
        </button>
      </div>
      <div className="text-black sm:text-xl text-lg font-semibold grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="bg-[#bc8f60] p-1">sin: {sin}</div>
        <div className="bg-[#bc8f60] p-1">cos: {cos}</div>
        <div className="bg-[#bc8f60] p-1">tan: {tan}</div>
        <div className="bg-[#bc8f60] p-1">cosec: {cosec}</div>
        <div className="bg-[#bc8f60] p-1">sec: {sec}</div>
        <div className="bg-[#bc8f60] p-1">cot: {cot}</div>
      </div>
    </div>
  );
};

export default TrigoFunc;
