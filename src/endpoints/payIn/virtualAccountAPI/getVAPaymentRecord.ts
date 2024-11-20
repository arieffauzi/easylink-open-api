import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const getVAPaymentRecord = async () => {
    console.log("va payment rec");
    const APP_KEY = getEnv("APP_KEY", "")
    const NONCE = uuid();
    const timestamp = new Date().getTime();

    const signHeaders = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp
    }
    
    const body = {
        virtual_account : "2619371987198731"
    }

    const signature = createSignature(signHeaders, body);
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
    url: "/virtual-account/get-virtual-account-payment",
  };
  console.log(10,fetchParams);
  

  const result = fetchAPI(fetchParams);
}