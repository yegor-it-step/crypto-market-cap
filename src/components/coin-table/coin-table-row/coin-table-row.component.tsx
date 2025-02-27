import "./coin-table-row.styles.css";

interface ICoinTableRowComponentProps {
  icon: string;
  name: string;
  rank: number;
  symbol: string;
}

export const CoinTableRowComponent = ({
  icon,
  name,
  rank,
  symbol,
}: ICoinTableRowComponentProps) => {
  return (
    <div className="container">
      <img src={icon} alt={name} />
      <p>{name}</p>
      <p>{rank}</p>
      <p>{symbol}</p>
    </div>
  );
};
