import { useEffect, useState } from "react"

function App() {

  const [currencyRates, setCurrencyRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BDT');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState('');

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/d337fe240c28b1653b8dc674/latest/${fromCurrency}`);
        const data = await response.json();
        setCurrencyRates(data.conversion_rates);
      } catch (error) {
        console.error('Error fetching currency rates: ', error);
      }
    }
    fetchCurrencyRates();
  }, [fromCurrency]);

  const handelConvertCurrency = () => {
    const rate = currencyRates[toCurrency];
    setConvertedAmount(amount * rate).toFixed(2);
  }

  return (
    <div className="bg-cyan-950 p-6 h-screen flex items-center justify-center">
      <div className="w-4/12 bg-slate-900 p-5 rounded-lg shadow-lg text-center">
        <h1 className="text-white text-2xl mb-5">Currency Converter</h1>
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="bg-cyan-900 rounded-xl p-3 flex items-center justify-between">
            <div className="text-left">
              <label className="block mb-2 text-white">From:</label>
              <input
                className="p-3 rounded-lg bg-cyan-800 text-white outline-none"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="text-right">
              <p className="mb-2 text-white">Currency Type</p>
              <select
                className="p-3 rounded-lg bg-cyan-800 text-white outline-none cursor-pointer"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {Object.keys(currencyRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="bg-cyan-900 rounded-xl p-3 flex items-center justify-between">
            <div className="text-left">
              <label className="block mb-2 text-white">To:</label>
              <input
                className="p-3 rounded-lg bg-cyan-800 text-white outline-none"
                type="number"
                value={convertedAmount} />
            </div>
            <div className="text-right">
              <p className="mb-2 text-white">Currency Type</p>
              <select
                className="p-3 rounded-lg bg-cyan-800 text-white outline-none cursor-pointer"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {Object.keys(currencyRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg" type="submit">Convert</button>
        </form>
      </div>
    </div>
  )
}

export default App
