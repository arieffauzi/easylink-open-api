import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createTransferChinaB2B = async () => {
    console.log("b2b");
    const APP_KEY = getEnv("APP_KEY", "");
    const NONCE = uuid();
    const timestamp = new Date().getTime();

    const signHeader = {
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp
    }

    const body =   {
        transaction: {
            destination_currency: "CNY",
            destination_amount: 466.98,
            destination_country: "CHN"
        },
        source: {
            segment: "business",
            address_country: "CHN",
            address_city: "Aksu",
            address_line: "CHN",
            company_name: "test",
            company_trading_name: "companytradingname",
            company_registration_number: "companyregistrationnumber",
            company_registration_country: "CHN"
        },
        destination: {
            segment: "business",
            beneficiary_account_type:"Bank Account",
            swift_code: "ABOCCNBJ070",
            bank_account_number: "3456789099999999",
            company_name: "surfin",
            address_country_name: "China",
            address_country: "CHN",
            address_city: "Aksu",
            address_line: "CHN",
            relation: "Vendor",
            relation_code: "04",
            purpose: "Goods trade",
            purpose_code: "008-01",
            source_of_income: "Bank Deposit",
            source_of_income_code: "01",
            contract_key: "idn-data/easylink_1703848232Sd0o7i.pdf",
            additional_note: "",
            transfer_type: "B2B"
        },
        reference: uuid()
    }

    const signature = createSignature(signHeader, body);
    const token = await getToken();

    const headers = {
        Authorization: token,
        "X-EasyLink-AppKey": APP_KEY,
        "X-EasyLink-Nonce": NONCE,
        "X-EasyLink-Timestamp": timestamp,
        "X-EasyLink-Sign": signature,
      };

      console.log(123, headers);
      

      const fetchParams = {
        headers,
        body,
        url: "/transfer/create-international-transfer"
      }
    
      const res = await fetchAPI(fetchParams)
      console.log(111,res);
      
    
}