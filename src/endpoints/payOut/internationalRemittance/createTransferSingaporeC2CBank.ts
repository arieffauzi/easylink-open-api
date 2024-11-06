import { uuid } from "uuidv4";
import { getEnv } from "../../../getenv";
import { createSignature, fetchAPI } from "../../../utils";
import { getToken } from "../../getToken";

export const createTransferSingaporeC2CBank = async () => {
    console.log("sg c2c bank");
    
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
            bank: "CITIBANK N.A. SINGAPORE",
            bank_code: "7171",
            mobile_number: "0292888766",
            first_name: "Wang",
            last_name: "DACHUI",
            swift_code: "CIBBSGSG",
            bank_account_number: "34567896788",
            relation: "Vendor",
            relation_code: "04",
            purpose: "Goods trade",
            purpose_code: "008-01"
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
    console.log(11,fetchParams);
    

    const res = await fetchAPI(fetchParams);
    console.log(111,res);
}