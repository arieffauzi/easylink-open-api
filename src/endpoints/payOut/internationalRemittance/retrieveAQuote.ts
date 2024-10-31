import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const retrieveAQuote = async () => {
  console.log("quote");
  const APP_KEY = getEnv("APP_KEY", "");
  const timestamp = new Date().getTime();
  const NONCE = uuid();

  const signHeader = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {
    source_currency: "IDR",
    destination_currency: "CNY",
    destination_segment: "individual",
  };

  const signature = createSignature(signHeader, body);
  const token = await getToken();

  const headers = {
    Authorization: token,
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
    "X-EasyLink-Sign": signature,
  };

  console.log(223,headers);
  
  const fetchParams = {
    headers,
    body,
    url: "/quotes/get-quotes",
  };

  const result = await fetchAPI(fetchParams);
  console.log(333, result);
};
