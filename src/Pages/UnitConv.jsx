const UnitConv = () => {
  return (
    <>
      <div className="bg-[#bc9060bb] rounded-xl p-6 shadow-xl w-[90%] max-w-[500px] mx-auto absolute flex flex-col sm:flex-row gap-2 justify-center items-center ">
        <div className="flex flex-col sm:w-1/2 w-full">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            className="bg-[#8a6339] h-[40px] placeholder:text-[#e7c5a1] p-2 rounded"
            placeholder="From"
          />
          <select className="bg-[#a87b4c] h-[35px] p-1 rounded hover:bg-[#b1824f]">
            <option value="nanometre">Nanometre</option>
            <option value="micrometre">Micrometre</option>
            <option value="millimetre">Millimetre</option>
            <option value="centimetre">Centimetre</option>
            <option value="metre">Metre</option>
            <option value="kilometre">Kilometre</option>
            <option value="mile">Mile</option>
            <option value="yard">Yard</option>
            <option value="foot">Foot</option>
            <option value="inch">Inch</option>
          </select>
        </div>
        <div className="flex flex-col sm:w-1/2 w-full">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            className="bg-[#8a6339] h-[40px] placeholder:text-[#e7c5a1] p-2 rounded"
            placeholder="To"
          />
          <select className="bg-[#a87b4c] h-[35px] p-1 rounded hover:bg-[#b1824f]">
            <option value="nanometre">Nanometre</option>
            <option value="micrometre">Micrometre</option>
            <option value="millimetre">Millimetre</option>
            <option value="centimetre">Centimetre</option>
            <option value="metre">Metre</option>
            <option value="kilometre">Kilometre</option>
            <option value="mile">Mile</option>
            <option value="yard">Yard</option>
            <option value="foot">Foot</option>
            <option value="inch">Inch</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default UnitConv;
