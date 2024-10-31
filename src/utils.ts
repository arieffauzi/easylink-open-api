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
  let formData = Object.entries(data);

  let custom = '';

  const test = formData.map((item: any[]) => {
    if (typeof item[1] == "object") {
      item[1] = Object.entries(item[1]);
    }
    return item;
  });

  let firstSort = test.sort();


  for (let index = 0; index < firstSort.length; index++) {
    if(typeof firstSort[index][1] !== 'string' && typeof firstSort[index][1] !== 'number') {
      const secondSort = firstSort[index][1].sort();
      for (let i = 0; i < secondSort.length; i++) {
       custom += `&${firstSort[index][0]}.${secondSort[i][0]}=${secondSort[i][1]}`;
      }
      firstSort[index] = secondSort;
    } else {
      custom += `&${firstSort[index][0]}=${firstSort[index][1]}`
    }
  }

  custom = custom.replace(/ /g, "+").replace(/\//g, '%2F');


  const stringToSign = `${APP_KEY + custom + APP_KEY}`;

  console.log('stringToSign', stringToSign)

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

const bubleSort = (arr: any[], n: number) => {
  var i, j, temp;
  var swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were
    // swapped by inner loop, then break
    if (swapped == false) break;
    console.log("arr", arr);
  }
};
