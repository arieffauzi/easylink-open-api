import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const getInternationalTransfer = async () => {
    console.log("get inter tf");
    
    const APP_KEY = getEnv("APP_KEY", "");
    const NONCE = uuid();
    const timestamp = new Date().getTime();

    const signHeader = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp
    }

    const body ={
        reference : "fbf5d793-ccf3-45fe-9010-ed3d6e7796d4",
    }

    const signature = createSignature(signHeader, body)
    const token = await getToken();

    const headers ={
        Authorization: token,
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp,
        "X-EasyLink-Sign": signature
    }
    
    const fetchParams = {
        headers,
        body,
        url : "/transfer/get-international-transfer"
    }

    console.log(12, fetchParams);
    

    const res = await fetchAPI(fetchParams);
    console.log(12,res);
}