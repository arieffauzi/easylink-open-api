import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createMerchantVirtualAccount = async () => {
  const APP_KEY = getEnv("APP_KEY", "");
  const timestamp = new Date().getTime();
  const NONCE = uuid();

  const sigHeaders = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {
    customer_name: "Yoga Chandra Sudewo",
    payment_channel: "PERMATA",
    billing_type: "2",
    external_id: uuid(),
    expiration_date: "2024-11-27T19:00:00+07:00",
    amount: "",
    customer_phone: "87728493999",
    customer_email: "imansetiawan@gmail.com",
  };

  const signature = createSignature(sigHeaders, body);
  const token = await getToken();

  const headers = {
    Authorization: token,
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
    "X-EasyLink-Sign": signature,
  };
  console.log("headers", headers);

  const fetchParams = {
    headers,
    body,
    url: "/virtual-account/create-virtual-account",
  };

  const result = fetchAPI(fetchParams);
};
