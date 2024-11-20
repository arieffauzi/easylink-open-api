import { IDestinationBusiness } from "./constant"
import { createTransfer } from "./createTransfer";

export const createTransferChina = async () => {
console.log("b2b china");

// B2B
    const transaction = {
        destination_currency: "CNY",
        destination_amount: 466.98,
        destination_country: "CHN"
    }

        const source = {
        segment: "business",
        address_country: "CHN",
        address_city: "Aksu",
        address_line: "CHN",
        company_name: "test",
        company_trading_name: "companytradingname",
        company_registration_number: "companyregistrationnumber",
        company_registration_country: "CHN"
    }

   const destination: IDestinationBusiness = {
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
    }

    // C2C
    // const source:ISourceCustomer = {
    //     segment: "individual",
    //     address_country: "CHN",
    //     address_city: "Aksu",
    //     address_line: "CHN",
    //     id_number: "Wasa123123123123",
    //     id_type: "passport",
    //     legal_name_first: "Wang",
    //     legal_name_last: "DACHUI",
    //     date_of_birth: "1997-11-02",
    //     nationality: "IDN",
    //   };

    //   const destination: IDestinationCustomer = {
    //     segment: "individual",
    //     beneficiary_account_type: "Bank Account",
    //     first_name: "Wang",
    //     last_name: "DACHUI",
    //     swift_code: "ABOCCNBJ070",
    //     bank_account_number: "3456789099999999",
    //     id_number: "370782199004251132",
    //     mobile_number: "13621115092",
    //     relation: "Vendor",
    //     relation_code: "04",
    //     purpose: "Goods trade",
    //     purpose_code: "008-01",
    //   };

    // ewallet
    // const destination: IDestinationCustomer = {
    //     segment: "individual",
    //     beneficiary_account_type: "eWallet",
    //     ewallet_id: "13621134092",
    //     id_number: "370782199004251132",
    //     date_of_birth: "1977-09-04",
    //     first_name: "Wang",
    //     last_name: "DACHUI",
    //     relation: "Vendor",
    //     relation_code: "04",
    //     purpose: "Send to self",
    //     purpose_code: "004-02",
    //     source_of_income_code: "01",
    //     source_of_income: "Bank Deposit",
    //   };

    await createTransfer({ transaction, source, destination });
    
}


        