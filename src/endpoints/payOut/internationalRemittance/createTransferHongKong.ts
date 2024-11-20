import { createTransfer } from "./createTransfer";
import { IDestinationBusiness, ISourceBusiness } from "./constant";

export const createTransferHongKong = async () => {

  // b2b
  const transaction = {
    destination_currency: "HKD",
    destination_amount: 466.98,
    destination_country: "HKG",
  };
  const source: ISourceBusiness = {
    segment: "business",
    address_country: "CHN",
    address_city: "Aksu",
    address_line: "two street",
    company_name: "test",
    company_trading_name: "companytradingname",
    company_registration_number: "companyregistrationnumber",
    company_registration_country: "CHN",
  };
  const destination: IDestinationBusiness = {
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
    contract_key: "idn-data/easylink_1703848232Sd0o7i.pdf",
  };

  // c2c
  // const source: ISourceCustomer = {
  //   segment: "individual",
  //   address_country: "CHN",
  //   address_city: "Aksu",
  //   address_line: "CHN",
  //   id_number: "Wasa123123123123",
  //   id_type: "passport",
  //   legal_name_first: "Wang",
  //   legal_name_last: "DACHUI",
  //   date_of_birth: "1997-11-02",
  //   nationality: "IDN",
  // };
  // const destination: IDestinationCustomer = {
  //   segment: "individual",
  //   beneficiary_account_type: "Bank Account",
  //   first_name: "Wang",
  //   last_name: "DACHUI",
  //   bank: "The Hongkong and Shanghai Banking Corporation Limited",
  //   bank_code: "004",
  //   bank_account_number: "3456789099999999",
  //   address_city: "ss",
  //   address_country: "SGP",
  //   address_line: "CIBBSGSG",
  //   relation: "Vendor",
  //   relation_code: "04",
  //   purpose: "Goods trade",
  //   purpose_code: "008-01",
  // };

  await createTransfer({ transaction, source, destination });
};
