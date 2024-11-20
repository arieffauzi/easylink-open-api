import { IDestinationCustomer, ISourceCustomer } from "./constant";
import { createTransfer } from "./createTransfer";

export const createTransferAfrica = async () => {
    console.log("africa");
    
    // c2c

    const transaction = {
        destination_country: "KEN",
        destination_currency: "KES",
        destination_amount: 10000
      }

      const source:ISourceCustomer = {
        segment: "individual",
        id_number: "3213123123123123",
        id_type: "national",
        legal_name_first: "Wang",
        legal_name_last: "DACHUI",
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
    //     bank_code: "656",
    //     bank_account_number: "0100003654321",
    //     mobile_number: "98765432",
    //     relation: "Vendor",
    //     relation_code: "04"
    //   }

    //   EWALLET
    const destination:IDestinationCustomer = {
        segment: "individual",
        beneficiary_account_type: "eWallet",
        first_name: "Wang",
        last_name: "DACHUI",
        ewallet_id: "123233245678901",
        relation: "Vendor",
        relation_code: "04"
      }

  await createTransfer({ transaction, source, destination });

}