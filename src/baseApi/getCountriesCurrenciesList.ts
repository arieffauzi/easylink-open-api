import { uuid } from "uuidv4";
import { getToken } from "../endpoints/getToken";
import { getEnv } from "../getenv";
import { createSignature, fetchAPI } from "../utils";

export const getCountriesCurrenciesList = async () => {
  console.log("currency");

  const APP_KEY = getEnv("APP_KEY", "");
  const NONCE = uuid();
  const timestamp = new Date().getTime();

  const signHeader = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {
    currency: "USD",
    country_alpha3_code: "ITA",
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

  const fetchParams = {
    headers,
    body,
    url: "/data/countries-currencies",
  };

  const res = await fetchAPI(fetchParams);
};
