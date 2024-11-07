import { uuid } from "uuidv4";
import { getEnv } from "../../getenv";
import { createSignature, fetchAPI } from "../../utils";
import { getToken } from "../getToken";
import moment from "moment";


export const getRemittanceList = async () => {
  const APP_KEY = getEnv("APP_KEY", "");
  const timestamp = new Date().getTime();
  const NONCE = uuid();

  const sigHeaders = {
    "X-EasyLink-AppKey": APP_KEY,
    "X-EasyLink-Nonce": NONCE,
    "X-EasyLink-Timestamp": timestamp,
  };

  const yesterdayISO = moment().subtract(1, 'day').toISOString();

  const body = {
    start_datetime: yesterdayISO,
    end_datetime: new Date().toISOString(),
    page_size: "10",
    page_number: "1"
}

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
    url: "/transfer/get-remittance-list",
  };


  const result = fetchAPI(fetchParams);
};
