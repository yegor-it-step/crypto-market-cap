// import { useCryptocurrencyList } from "../../features/cryptocurrency/use-cryptocurrency-list";
import { RefObject, useRef, useState } from "react";
import { CoinTableRowComponent } from "./coin-table-row/coin-table-row.component";

export const CoinTableComponent = () => {
  // const { data: cryptoData, isError, isLoading } = useCryptocurrencyList();
  const [searchValue, setSearchValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const cryptoData = [
    { id: 1, logo: "", name: "test", rank: 0, symbol: "TE" },
    { id: 2, logo: "", name: "bitcoin", rank: 1, symbol: "BTC" },
  ];

  const handleOnInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const setDefaultInputValue = () => {
    setSearchValue("");
  };

  console.log(inputRef);
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          // value={searchValue}
          type="text"
          // onChange={handleOnInputValueChange}
        />
        <button>clean</button>
      </div>
      {cryptoData.map(
        (coin: {
          id: number;
          logo: string;
          name: string;
          rank: number;
          symbol: string;
        }) => (
          <CoinTableRowComponent
            key={coin.id}
            icon={coin.logo}
            name={coin.name}
            rank={coin.rank}
            symbol={coin.symbol}
          />
        )
      )}
    </div>
  );
};
