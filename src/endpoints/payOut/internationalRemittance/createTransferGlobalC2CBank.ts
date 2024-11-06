import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createTransferGlobalC2CBank = async () => {
    console.log("global c2c");
    const APP_KEY = getEnv("APP_KEY", "")
    const NONCE = uuid();
    const timestamp = new Date().getTime();

    const signHeader = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp" : timestamp
    }

    const body = {
        transaction: {
            destination_country: "SGP",
            destination_currency: "USD",
            destination_amount: 90.79
        },
        source: {
            segment: "individual",
            address_country: "IDN",
            address_city: "Aksu",
            address_line: "pateat street",
            id_number: "3213123123123123",
            id_type: "national",
            legal_name_first: "Wang",
            legal_name_last: "DACHUI",
            date_of_birth: "1997-11-02",
            nationality: "IDN"
        },
        destination: {
            segment: "individual",
            beneficiary_account_type: "Bank Account",
            bank:"CITIBANK N.A. SINGAPORE",
            email:"surfin@163.com",
            first_name: "Wang",
            last_name: "DACHUI",
            swift_code: "CIBBSGSG",
            bank_account_number: "34567896788",
            address_city: "ss",
            address_country: "SGP",
            address_line: "CIBBSGSG",
            relation: "Vendor",
            relation_code: "04",
            purpose: "Goods trade",
            purpose_code: "008-01",
            source_of_income: "Bank Deposit",
            source_of_income_code: "01"
        },
        reference: uuid()
    }

    const signature = createSignature(signHeader, body);
    const token = await getToken();

    const headers = {
        Authorization : token,
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp,
        "X-EasyLink-Sign": signature
    }

    const fetchParams = {
        headers,
        body,
        url : "/transfer/create-international-transfer"
    }

    const res = await fetchAPI(fetchParams);
    console.log(111,res);
    
}