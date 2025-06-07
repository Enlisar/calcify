import { LuPi } from "react-icons/lu";
import { useState, useRef } from "react";
import { evaluate, sin } from "mathjs";

const TrigoFunc = () => {
  const [type, setType] = useState("rad");
  const [angle, setAngle] = useState(0);
  const [dispangle, setDispangle] = useState(0);
  const addPi = () => {
    setDispangle((v) => v + "π");
    setAngle((a) => (a * 22) / 7);
  };

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
          }}
        />
        <select className="bg-[#805d2d] text-[#bc8f60] text-lg h-[33px] w-[120px] select">
          <option
            value="deg"
            onClick={() => setAngle((v) => v * ((180 * 7) / 22))}
          >
            Degree
          </option>
          <option
            value="rad"
            onClick={() => setAngle((v) => v * ((22 / 7) * 180))}
          >
            Radian
          </option>
        </select>
        <button
          className="bg-[#805d2d] text-[#bc8f60] h-[33px] w-[33px] p-2 ml-2 shadow-md hover:shadow-xl active:shadow-inner rounded"
          onClick={addPi}
        >
          <LuPi />
        </button>
      </div>
      <div className="text-black sm:text-xl text-lg font-semibold grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="bg-[#bc8f60] p-1">sin: {Math.sin(angle)}</div>
        <div className="bg-[#bc8f60] p-1">cos: </div>
        <div className="bg-[#bc8f60] p-1">tan: </div>
        <div className="bg-[#bc8f60] p-1">cosec: </div>
        <div className="bg-[#bc8f60] p-1">sec: </div>
        <div className="bg-[#bc8f60] p-1">cot: </div>
      </div>
    </div>
  );
};

export default TrigoFunc;
