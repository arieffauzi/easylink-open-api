import { IDestinationCustomer, ISourceCustomer } from "./constant";
import { createTransfer } from "./createTransfer";

export const createTransferNepal = async () => {
    console.log("nepal");
    // C2C

    const transaction = {
        destination_country: "NPL",
        destination_currency: "NPR",
        destination_amount: 10000
      }

      const source:ISourceCustomer = {
        segment: "individual",
        id_number: "3213123123123123",
        id_type: "national",
        gender: "M",
        legal_name_first: "Wang",
        legal_name_last: "DACHUI",
        mobile_number: "2123123123",
        date_of_birth: "1997-11-02",
        address_country: "IDN",
        address_city: "Aksu",
        address_line: "pateat street",
        nationality: "IDN"
      }

    //   const destination:IDestinationCustomer = {
    //     segment: "individual",
    //     beneficiary_account_type: "Bank Account",
    //     first_name: "Wang",
    //     last_name: "DACHUI",
    //     bank_code: "94316900",
    //     bank_account_number: "02905030278614",
    //     mobile_number: "9840032518",
    //     relation: "Vendor",
    //     relation_code: "04",
    //     purpose: "Goods trade",
    //     purpose_code: "008-01",
    //     source_of_income: "Bank Deposit",
    //     source_of_income_code: "01",
    //     occupation: "Agriculture",
    //     occupation_code: "001"
    //   }

    //   ewallet
    const destination:IDestinationCustomer = {
        segment: "individual",
        beneficiary_account_type: "eWallet",
        first_name: "Wang",
        last_name: "DACHUI",
        ewallet_id: "123123123",
        mobile_number: "9840032518",
        relation: "Vendor",
        relation_code: "04",
        purpose: "Goods trade",
        purpose_code: "008-01",
        source_of_income: "Bank Deposit",
        source_of_income_code: "01",
        occupation: "Agriculture",
        occupation_code: "001"
      }

  await createTransfer({ transaction, source, destination });

    
}