import { appAxios } from "../../configs/axios.config";

export const getCryptocurrencyList = async () => {
  const response = await appAxios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map"
  );
  console.log(response.data.data, "res");
  return response.data.data.slice(0, 10);
};
