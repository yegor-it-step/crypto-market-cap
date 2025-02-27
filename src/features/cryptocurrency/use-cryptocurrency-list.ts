import { useQuery } from "@tanstack/react-query";
import { getCryptocurrencyList } from "../../api";

export const useCryptocurrencyList = () => {
  return useQuery({
    queryKey: ["cryptoList"],
    queryFn: getCryptocurrencyList,
  });
};
