import { useCryptocurrencyList } from "../../features/cryptocurrency/use-cryptocurrency-list";
import { CoinTableRowComponent } from "./coin-table-row/coin-table-row.component";

export const CoinTableComponent = () => {
  const { data: cryptoData, isError, isLoading } = useCryptocurrencyList();

  console.log(cryptoData, "data");
  console.log(isLoading, "loading");
  console.log(isError, "error");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>error!!!</p>;
  }

  return (
    <>
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
    </>
  );
};
{
  /* {cryptoData.map(
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
      )} */
}
