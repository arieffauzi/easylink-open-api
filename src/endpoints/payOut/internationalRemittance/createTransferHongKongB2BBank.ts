import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createTransferHongKongB2BBank = async () => {
    console.log("HKD B2B");
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
            destination_currency: "HKD",
            destination_amount: 466.98,
            destination_country: "HKG"
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
            bank: "The Hongkong and Shanghai Banking Corporation Limited",
            bank_code: "004",
            bank_account_number: "3456789099999999",
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

    const res = await fetchAPI(fetchParams);
    console.log(1,res);
}