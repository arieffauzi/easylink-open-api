import { sign } from "crypto";
import { getEnv } from "./getenv";
import axios from "axios";

interface IFetchAPI {
  body: any;
  headers: any;
  url: string;
}

export const createSignature = (headers: any, body: any) => {
  const PRIVATE_KEY = getEnv("PRIVATE_KEY", "");
  const APP_KEY = getEnv("APP_KEY", "");

  const data = { ...headers, ...body };
  const formData = Object.entries(data);

  var result = [];
  for (let i = 0; i < formData.length; i++) {
    result.push(formData[i].join("="));
  }

  newKeys = newKeys.sort();
  let originStr = "";
  let i = 0;
  for (const v of newKeys) {
    if (i > 0) {
      originStr += `&${v}=${encodeURIComponent(String(data[v]))}`;
    } else {
      originStr += `${v}=${encodeURIComponent(String(data[v]))}`;
    }
    i++;
  }
  originStr = originStr.replace(/%20/g, "+");

  const stringToSign = `${APP_KEY + originStr + APP_KEY}`;
  console.log("stringToSign", stringToSign);
  const signature = sign(
    "RSA-SHA256",
    Buffer.from(stringToSign),
    PRIVATE_KEY
  ).toString("base64");

  return signature;
};

export const fetchAPI = async (params: IFetchAPI) => {
  const { body, headers, url } = params;
  const BASE_URL = getEnv("BASE_URL", "");

  const fullUrl = BASE_URL + url;

  try {
    const response = (
      await axios.post(fullUrl, body, {
        headers,
      })
    ).data;
    console.log("response", response);
    return response.data;
  } catch (error: any) {
    console.log("error response", error);
    throw error.response.data;
  }
};
