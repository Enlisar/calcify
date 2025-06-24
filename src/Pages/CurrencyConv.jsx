import { useState } from "react";
const Currency = () => {
  let [from, setFrom] = useState("USD");
  let [fromval, setFromval] = useState();
  let [to, setTo] = useState("INR");
  let [toval, setToval] = useState();

  const calculate = () => {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
      .then((resp) => resp.json())
      .then((data) => {
        const convertedAmount = (fromval * data.rates[to]).toFixed(2);
        setToval(convertedAmount);
      });
  };
  return (
    <>
      <div className="bg-[#bc9060bb] rounded-xl p-5 shadow-xl w-[90%] max-w-[700px] mx-auto absolute flex flex-col gap-2 justify-center items-center ">
        <div className="text-2xl mb-2 text-[#805d2d] font-semibold">
          Currency Converter
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-row">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              className="bg-[#e2b88b] h-[40px] placeholder:text-[#8a6339] placeholder:font-medium p-2 rounded text-[#8a6339] w-full"
              placeholder="From"
              value={fromval}
              onChange={(e) => setFromval(e.target.value)}
            />
            <select
              className="select w-[80px] bg-[#8a6339] text-[#e2b88b]"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PHP">PHP</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="USD">USD</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>
          <div className="flex flex-row">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              className="bg-[#e2b88b] h-[40px] placeholder:text-[#8a6339] placeholder:font-medium p-2 rounded text-[#8a6339] w-full"
              placeholder="To"
              readOnly="readonly"
              value={toval}
            />
            <select
              className="select w-[80px] bg-[#8a6339] text-[#e2b88b]"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PHP">PHP</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="USD">USD</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>
        </div>
        <div>
          <button
            className="bg-[#805d2d] p-3 rounded-lg mt-4 hover:bg-[#9e7439] active:bg-[#5f4522] transition duration-[600] text-[#e2b88b]"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  );
};

export default Currency;
