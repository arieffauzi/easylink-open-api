import { IDestinationBusiness, ISourceBusiness } from "./constant";
import { createTransfer } from "./createTransfer";

export const createTransferUK = async () => {
    console.log("uk b2b");
    
    // b2b
    const transaction = {
        destination_country: "GBR",
        destination_currency: "GBP",
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
        sort_code: "123412",
        bank_account_number: "46633123",
        company_name: "surfin company",
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
      //   sort_code: "123456",
      //   bank: "bank name",
      //   bank_account_number: "34233333",
      //   relation: "Vendor",
      //   relation_code: "04",
      //   purpose: "Goods trade",
      //   purpose_code: "008-01",
      //   source_of_income: "Bank Deposit",
      //   source_of_income_code: "01"
      // }


  await createTransfer({ transaction, source, destination });

}