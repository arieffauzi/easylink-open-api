import { IDestinationBusiness, ISourceBusiness } from "./constant";
import { createTransfer } from "./createTransfer";

export const createTransferJapan = async () => {
  console.log("jpn b2b");

  // b2b
  const transaction = {
    destination_country: "JPN",
    destination_currency: "JPY",
    destination_amount: 500,
  };

  const source: ISourceBusiness = {
    segment: "business",
    address_country: "IDN",
    address_city: "Aksu",
    address_line: "two street",
    company_name: "pyvio company",
    company_trading_name: "companytradingname",
    company_registration_number: "5128345812123",
    company_registration_country: "IDN",
  };

  const destination: IDestinationBusiness = {
    segment: "business",
    beneficiary_account_type: "Bank Account",
    bank_code: "0001",
    branch_code: "599",
    mobile_number: "094876488",
    bank_account_number: "3224422",
    company_name: "surfin company",
    address_city: "ss",
    address_country: "SGP",
    address_zip: "123131",
    address_line: "xx09djj xd",
    date_of_incorporation: "2005-09-20",
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
  //   address_country: "IDN",
  //   address_city: "Aksu",
  //   address_line: "pateat street",
  //   id_number: "3213123123123123",
  //   id_type: "national",
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
  //   mobile_number: "094876488",
  //   address_city: "ss",
  //   address_country: "SGP",
  //   address_zip: "123131",
  //   address_line: "xx09djj xd",
  //   bank_code: "0001",
  //   branch_code: "599",
  //   bank_account_number: "3224422",
  //   relation: "Vendor",
  //   relation_code: "04",
  //   purpose: "Goods trade",
  //   purpose_code: "008-01",
  //   source_of_income: "Bank Deposit",
  //   source_of_income_code: "01",
  // };

  await createTransfer({ transaction, source, destination });
};
