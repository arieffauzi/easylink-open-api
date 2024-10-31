import { uuid } from "uuidv4";
import { getEnv } from "../getenv";
import { createSignature, fetchAPI } from "../utils";
import { getToken } from "../endpoints/getToken";

export const getOccupationList = async () => {
  console.log("occ list");
  const APP_KEY = getEnv("APP_KEY", "");
  const timestamp = new Date().getTime();
  const NONCE = uuid();

  const sigHeaders = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {};

  const signature = createSignature(sigHeaders, body);
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
    url: "/data/get-occupation",
  };

  const result = await fetchAPI(fetchParams);
};
