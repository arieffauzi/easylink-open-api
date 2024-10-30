import { uuid } from "uuidv4";
import { getEnv } from "../getenv";
import { createSignature, fetchAPI } from "../utils";
import { getToken } from "../endpoints/getToken";

export const getProvinceList = async () => {
  console.log("list provinsi");
  const APP_KEY = getEnv("APP_KEY", "");
  const timestamp = new Date().getTime();
  const NONCE = uuid();

  const signHeader = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {};

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
    url: "/data/province-list",
  };

  const res = await fetchAPI(fetchParams);
};
