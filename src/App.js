import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const form = (e) => {
    e.preventDefault();
  };
  const onCalculate = (e) => {
    const result = coins.filter(
      (coin) => coin.quotes.USD.price < e.target.value
    );
    setCoins(result);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.rank}.{coin.name} ({coin.symbol}: ($
              {Math.floor(coin.quotes.USD.price)}
              ))
            </option>
          ))}
        </select>
      )}
      <form onSubmit={form} htmlFor={"pay"}>
        <input onChange={onCalculate} id="pay" name="pay" type={"text"} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default App;
