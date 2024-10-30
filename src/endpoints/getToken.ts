import { getEnv } from "../getenv";
import { uuid } from "uuidv4";
import { createSignature, fetchAPI } from "../utils";

export const getToken = async () => {
  const timestamp = new Date().getTime();
  const APP_KEY = getEnv("APP_KEY", "");
  const APP_ID = getEnv("APP_ID", "");
  const APP_SECRET = getEnv("APP_SECRET", "");
  const NONCE = uuid();

  const sigHeaders = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {
    app_id: APP_ID,
    app_secret: APP_SECRET,
  };

  const signature = createSignature(sigHeaders, body);

  const headers = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
    "X-EasyLink-Sign": signature,
  };

  const fetchParams = {
    headers,
    body,
    url: "/get-access-token",
  };

  const result = await fetchAPI(fetchParams);

  return result
};
