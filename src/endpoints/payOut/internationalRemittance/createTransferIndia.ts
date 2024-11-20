import { IDestinationBusiness, ISourceBusiness } from "./constant";
import { createTransfer } from "./createTransfer";

export const createTransferIndia = async () => {
    console.log("india b2b");
    
    // b2b
    const transaction = {
        destination_country: "IND",
        destination_currency: "INR",
        destination_amount: 15000
      }
      
      const source:ISourceBusiness = {
        segment: "business",
        address_country: "IDN",
        address_city: "Aksu",
        address_line: "two street",
        company_name: "pyvio company",
        company_trading_name: "companytradingname",
        company_registration_number: "5128345812123",
        company_registration_country: "IDN"
      }

      const destination:IDestinationBusiness = {
        segment: "business",
        beneficiary_account_type: "Bank Account",
        bank_code: "BNPPARIBAS_061",
        branch_code: "065126",
        bank_account_number: "3224422",
        company_name: "surfin company",
        mobile_number: "13728884444",
        address_city: "ss",
        address_country: "SGP",
        address_line: "afdsaaf",
        relation: "Vendor",
        relation_code: "04",
        purpose: "Goods trade",
        purpose_code: "008-01",
        source_of_income: "Bank Deposit",
        source_of_income_code: "01",
        contract_key: "idn-data/easylink_1703848232Sd0o7i.pdf"
      }

      // c2c
      // const source:ISourceCustomer = {
      //   segment: "individual",
      //   address_country: "IDN",
      //   address_city: "Aksu",
      //   address_line: "pateat street",
      //   id_number: "3213123123123123",
      //   id_type: "national",
      //   legal_name_first: "Wang",
      //   legal_name_last: "DACHUI",
      //   date_of_birth: "1997-11-02",
      //   nationality: "IDN"
      // }

      // const destination:IDestinationCustomer = {
      //   segment: "individual",
      //   beneficiary_account_type: "Bank Account",
      //   first_name: "Wang",
      //   last_name: "DACHUI",
      //   bank_code: "0001",
      //   branch_code: "0001",
      //   bank_account_number: "3224422",
      //   address_city: "ss",
      //   address_country: "SGP",
      //   address_line: "afdsaaf",
      //   relation: "Vendor",
      //   relation_code: "04",
      //   purpose: "Goods trade",
      //   purpose_code: "008-01",
      //   source_of_income: "Bank Deposit",
      //   source_of_income_code: "01"
      // }

  await createTransfer({ transaction, source, destination });

}