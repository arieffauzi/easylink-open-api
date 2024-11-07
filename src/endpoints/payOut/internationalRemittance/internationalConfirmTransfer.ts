import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const internationalConfirmTransfer = async () => {
    console.log("confirm inter");
    const APP_KEY = getEnv("APP_KEY", "");
    const NONCE = uuid();
    const timestamp = new Date().getTime();

    const signHeader = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp
    }

    const body ={
        reference : "fae5b36f-2a12-4470-86ee-73a5b4d20452",
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
        url : "/transfer/confirm-international-transfer"
    }

    console.log(12, fetchParams);
    

    const res = await fetchAPI(fetchParams);
    console.log(12,res);
}