import React, { useCallback, useEffect, useMemo, useState } from "react";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";
import SelectCurrency from "./SelectCurrency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CurrencyExchanger = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("INR");
  const [amount, setAmount] = useState(0);
  const { loading, data, error } = useCurrencyInfo(baseCurrency);

  const currencies = useMemo(() => data, [data]);
  //Swapping Currrency

  const swapCurrency = useCallback(() => {
    setBaseCurrency(toCurrency);
    settoCurrency(baseCurrency);
  }, [toCurrency, baseCurrency]);

  //conversion

  const getConvertedAmount = useMemo(() => {
    if (!data || !data.conversion_rates) return 0;
    const rate = data.conversion_rates[toCurrency][1];

    const finalAmount = (amount * rate).toFixed(2);
    console.log(finalAmount);

    return finalAmount;
  }, [amount, data, toCurrency]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="bg-stone-300 h-screen w-screen">
        <div className="flex justify-center items-center ">
          <div className=" bg-white max-width-md w-[500px] mx-auto p-5 shadow-md my-10 rounded-md">
            <h1 className="text-2xl font-semibold text-center text-gray-700 mb-5">
              Currency Convertor
            </h1>
            <div className="flex justify-between items-center">
              <SelectCurrency
                currencies={currencies}
                title={"From: "}
                currency={baseCurrency}
                setCurrency={setBaseCurrency}
              />
              <button onClick={swapCurrency} className="mt-5">
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              </button>

              <SelectCurrency
                currencies={currencies}
                title={"To: "}
                currency={toCurrency}
                setCurrency={settoCurrency}
              />
            </div>
            <div>
              <label className="text-lg font-semibold">Amount:</label>
              <input
                type="number"
                className="border-gray-100 bg-slate-200 w-full outline-none px-2 py-1 text-lg rounded-md focus:ring-1  focus:ring-blue-600"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
              <div className="flex justify-end">
                <button
                  onClick={() => getConvertedAmount}
                  className="px-2 py-1 text-xl mt-3 font-normal text-white bg-blue-500 rounded-md hover:bg-blue-600 outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Convert
                </button>
              </div>
            </div>
            <p>
              {amount} {baseCurrency} = {getConvertedAmount} {toCurrency}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyExchanger;
