import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createTransferSingaporeB2BBank = async () => {
    console.log("sg b2b");
    const APP_KEY = getEnv("APP_KEY","");
    const NONCE = uuid();
    const timestamp = new Date().getTime()

    const signHeader = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp
    }

    const body = {
        transaction: {
            destination_country: "SGP",
            destination_currency: "SGD",
            destination_amount: 90.79
           
        },
        source: {
            segment: "business",
            address_country: "CHN",
            address_city: "Aksu",
            address_line: "two street",
            company_name: "test",
            company_trading_name: "companytradingname",
            company_registration_number: "companyregistrationnumber",
            company_registration_country: "CHN"
        },
        destination: {
            segment: "business",
            beneficiary_account_type: "Bank Account",
            bank:"CITIBANK N.A. SINGAPORE",
            swift_code: "CIBBSGSG",
            bank_account_number: "34567896788",
            bank_code: "7171",
            company_name: "surfin",
            address_city: "ss",
            address_country: "SGP",
            address_line: "CIBBSGSG",
            relation: "Vendor",
            relation_code: "04",
            purpose: "Goods trade",
            purpose_code: "008-01",
            source_of_income: "Bank Deposit",
            source_of_income_code: "01",
            contract_key: "idn-data/easylink_1703848232Sd0o7i.pdf"
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
    console.log(23,fetchParams);
    

    const res = await fetchAPI(fetchParams);
    console.log(23,res);
}