import { uuid } from "uuidv4";
import { getToken } from "../endpoints/getToken";
import { getEnv } from "../getenv";
import { createSignature, fetchAPI } from "../utils";

export const getJapanChinaListCity = async () => {
  console.log("japan");

  const APP_KEY = getEnv("APP_KEY", "");
  const NONCE = uuid();
  const timestamp = new Date().getTime();

  const signHeader = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {
    country: "JPN",
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
    url: "/data/destination-address-city",
  };

  const res = await fetchAPI(fetchParams);
};
