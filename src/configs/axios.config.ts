import axios from "axios";

export const appAxios = axios.create({
  headers: {
    "X-CMC_PRO_API_KEY": "5f4337a0-5a2f-43dc-ad4c-9bfb3ffccb44",
  },
});
