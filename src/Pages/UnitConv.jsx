import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const UnitConv = () => {
  const [from, setFrom] = useState("m");
  const [fromvalue, setFromvalue] = useState(0);
  const [to, setTo] = useState("cm");
  const [tovalue, setTovalue] = useState(0);
  const lengthToMeter = {
    nm: 1e-9,
    um: 1e-6,
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.34,
  };

  const conversion = () => {
    let result = (fromvalue / lengthToMeter[to]) * lengthToMeter[from];
    setTovalue((t) => result);
  };

  useEffect(conversion, [from, to, fromvalue]);

  return (
    <>
      <div className="bg-[#bc9060bb] rounded-xl p-5 shadow-xl w-[90%] max-w-[500px] mx-auto absolute flex flex-col gap-2 justify-center items-center ">
        <div className="text-2xl mb-2 text-[#805d2d] font-semibold">
          Unit Converter
        </div>
        <div className="w-[90%] max-w-[500px] mx-auto flex flex-col sm:flex-row gap-2 justify-center items-center">
          <div className="flex flex-col sm:w-1/2 w-full">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              className="bg-[#8a6339] h-[40px] placeholder:text-[#e7c5a1] p-2 rounded text-[#e7c5a1]"
              placeholder="From"
              value={fromvalue}
              onChange={(e) => setFromvalue(e.target.value)}
            />
            <select
              className="bg-[#a87b4c] h-[35px] p-1 rounded hover:bg-[#b1824f]"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="nm">Nanometre</option>
              <option value="um">Micrometre</option>
              <option value="mm">Millimetre</option>
              <option value="cm">Centimetre</option>
              <option value="m">Metre</option>
              <option value="km">Kilometre</option>
              <option value="mi">Mile</option>
              <option value="yd">Yard</option>
              <option value="ft">Foot</option>
              <option value="in">Inch</option>
            </select>
          </div>
          <div className="flex flex-col sm:w-1/2 w-full">
            <div className="bg-[#8a6339] h-[40px] p-2 rounded text-[#e7c5a1] flex justify-between overflow-x-auto">
              {tovalue}
              <button onClick={() => navigator.clipboard.writeText(tovalue)}>
                <FaRegCopy />
              </button>
            </div>
            <select
              className="bg-[#a87b4c] h-[35px] p-1 rounded hover:bg-[#b1824f]"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="nm">Nanometre</option>
              <option value="um">Micrometre</option>
              <option value="mm">Millimetre</option>
              <option value="cm">Centimetre</option>
              <option value="m">Metre</option>
              <option value="km">Kilometre</option>
              <option value="mi">Mile</option>
              <option value="yd">Yard</option>
              <option value="ft">Foot</option>
              <option value="in">Inch</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnitConv;
