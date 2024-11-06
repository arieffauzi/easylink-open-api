import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createTransferChinaC2CWallet = async () => {
    console.log("ewallet");
    const APP_KEY = getEnv("APP_KEY", "");
    const NONCE = uuid();
    const timestamp = new Date().getTime();

    const signHeader = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp
    }

    const body = {
        transaction: {
            destination_currency: "CNY",
            destination_amount: 466.98,
            destination_country: "CHN"
        },
        source: {
            segment: "individual",
            address_country: "CHN",
            address_city: "Aksu",
            address_line: "CHN",
            id_number: "Wasa123123123123",
            id_type: "passport",
            legal_name_first: "Wang",
            legal_name_last: "DACHUI",
            date_of_birth: "1997-11-02",
            nationality: "IDN"
        },
        destination: {
            segment: "individual",
            beneficiary_account_type: "eWallet",
            ewallet_id: "13621134092",
            id_number: "370782199004251132",
            date_of_birth: "1977-09-04",
            first_name: "Wang",
            last_name: "DACHUI",
            relation: "Vendor",
            relation_code: "04",
            purpose: "Send to self",
            purpose_code: "004-02",
            source_of_income_code: "01",
            source_of_income: "Bank Deposit"
        },
        reference: uuid()
    }

    const signature = createSignature(signHeader, body)
    const token = await getToken();

    const headers = {
        Authorization: token,
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp,
        "X-EasyLink-Sign": signature
    }


    const fetchParams ={
        headers,
        body,
        url: "/transfer/create-international-transfer"
    }
    
    const res = await fetchAPI(fetchParams);
    
}