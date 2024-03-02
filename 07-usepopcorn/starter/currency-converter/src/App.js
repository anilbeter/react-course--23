// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [fromCurrentCurrency, setFromCurrentCurrency] = useState("USD");
  const [toCurrentCurrency, setToCurrentCurrency] = useState("EUR");
  const [amount, setAmount] = useState(100);
  const [convertedCurr, setConvertedCurr] = useState(0);

  useEffect(
    function () {
      async function fetchCurrency() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrentCurrency}&to=${toCurrentCurrency}`
        );
        const data = await res.json();
        console.log(data);
        return data.rates[toCurrentCurrency];
      }
      fetchCurrency().then((rate) => setConvertedCurr(rate));
    },
    [fromCurrentCurrency, toCurrentCurrency, amount]
  );

  // Yalnızca döviz kuru değiştiğinde güncellenir.
  useEffect(() => {
    console.log(convertedCurr);
  }, [convertedCurr]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={fromCurrentCurrency}
        onChange={(e) => setFromCurrentCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrentCurrency}
        onChange={(e) => setToCurrentCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{convertedCurr}</p>
    </div>
  );
}
