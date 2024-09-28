import React from "react";
import PropTypes from "prop-types";

const SelectCurrency = ({ title, currencies = [], currency, setCurrency }) => {
  return (
    <>
      <div className="w-40">
        <label className="text-sm font-medium text-gray-800 block mb-1">
          {title}
        </label>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-1 rounded-md w-full border-slate-200 bg-slate-200 outline-none focus:ring-1 "
        >
          {currencies?.map((currency) => (
            <option value={currency[0]} key={currency}>
              {currency[0]}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
SelectCurrency.propTypes = {
  title: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  currency: PropTypes.string,
  setCurrency: PropTypes.func.isRequired,
};

export default SelectCurrency;
