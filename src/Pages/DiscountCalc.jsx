import { useState } from "react";

const DiscountCalc = () => {
  const [ogPrice, setOgprice] = useState();
  const [discount, setDiscount] = useState();
  const [price, setPrice] = useState();

  const discountCalculate = () => {};
  return (
    <div className="bg-[#bc9060bb] rounded-xl p-6 shadow-xl w-[90%] max-w-[500px] mx-auto absolute">
      <div className="flex flex-col sm:flex-row gap-2 items-center pb-2">
        <label className="text-white sm:w-1/2 font-semibold">
          Enter the price
        </label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          value={ogPrice}
          onChange={(e) => setOgprice(e.target.value)}
          placeholder="₹ Enter price"
          className="w-full sm:w-1/2 p-1.5 rounded bg-[#e0d3c5] text-[#805d2d] placeholder:text-[#805d2d] focus:outline-none focus:ring-2 focus:ring-[#805d2d] focus:bg-[#f0e4d8] transition duration-150"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center pb-2">
        <label className="text-white sm:w-1/2 font-semibold text-left">
          Enter the % discount
        </label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="% Enter price"
          className="w-full sm:w-1/2 p-1.5 rounded bg-[#e0d3c5] text-[#805d2d] placeholder:text-[#805d2d] focus:outline-none focus:ring-2 focus:ring-[#805d2d] focus:bg-[#f0e4d8] transition duration-150"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 pb-2">
        <p className="font-semibold">Money Saved</p>
        <p className="bg-[#e0d3c5] text-black px-3 py-1 rounded w-full sm:w-1/2">
          ₹
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 pb-2">
        <p className="font-semibold">Final Price</p>
        <p className="bg-[#e0d3c5] text-black px-3 py-1 rounded w-full sm:w-1/2">
          ₹
        </p>
      </div>
      <div className="justify-self-center">
        <button
          className="bg-[#805d2d] p-3 rounded mt-4 hover:bg-[#9e7439] active:bg-[#5f4522] transition duration-[600]"
          onClick={discountCalculate}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default DiscountCalc;
