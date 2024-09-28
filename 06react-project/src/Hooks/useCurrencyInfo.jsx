import React, { useEffect, useState } from "react";

const useCurrencyInfo = (baseCurrency) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/c1bd96b348dd2c24b9172274/latest/USD`
        );
        let data = await response.json();
        const currencyKeys = Object.entries(data.conversion_rates);
        setData(currencyKeys);
        console.log(currencyKeys);
      } catch (error) {
        setError(error);
        console.error("Error in fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [baseCurrency]);
  return { data, loading, error };
};
export default useCurrencyInfo;
