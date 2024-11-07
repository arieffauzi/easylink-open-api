import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";
import { ITransferParams } from "./constant";

export const createTransfer = async ({ transaction, source, destination }: ITransferParams) => {
    console.log("Creating Transfer");

    const APP_KEY = getEnv("APP_KEY", "");
    const NONCE = uuid();
    const timestamp = new Date().getTime();

    const signHeader = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp
    };

    const body = {
        transaction,
        source,
        destination,
        reference: uuid()
    };

    const signature = createSignature(signHeader, body);
    const token = await getToken();

    const headers = {
        Authorization: token,
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp,
        "X-EasyLink-Sign": signature
    };

    const fetchParams = {
        headers,
        body,
        url: "/transfer/create-international-transfer"
    };

    console.log("fetchParams", fetchParams);

    const res = await fetchAPI(fetchParams);
    console.log("Response", res);
    return res;
};