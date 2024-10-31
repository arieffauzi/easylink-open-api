import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createDomesticTransfer = async () => {
  const APP_KEY = getEnv("APP_KEY", "");
  const timestamp = new Date().getTime();
  const NONCE = uuid();

  const sigHeaders = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const body = {
    reference: uuid(),
    bank_id: "2",
    account_holder_name: "RAIDY WIJAYA",
    account_number: "0315747263",
    amount: "4000000",
    description: "domestic transfer bni 0315747263 009 v2",
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
    url: "/v2/transfer/create-domestic-transfer",
  };

  const result = fetchAPI(fetchParams);
};
