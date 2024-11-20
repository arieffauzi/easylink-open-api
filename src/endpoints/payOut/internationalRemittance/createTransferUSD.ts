import { createTransfer } from "./createTransfer";
import { IDestinationBusiness, ISourceBusiness } from "./constant";

export const createTransferUSD = async () => {
  console.log("usd usa b2b");

  // b2b
  const transaction = {
    destination_country: "USA",
    destination_currency: "USD",
    destination_amount: 90.79,
  };

  const source: ISourceBusiness = {
    segment: "business",
    address_country: "IDN",
    address_city: "Aksu",
    address_line: "two street",
    company_name: "pyvio company",
    company_trading_name: "companytradingname",
    company_registration_number: "63746192873912",
    company_registration_country: "IDN",
  };

  const destination: IDestinationBusiness = {
    segment: "business",
    beneficiary_account_type: "Bank Account",
    bank: "CITIBANK N.A. SINGAPORE",
    swift_code: "STERTW12",
    bank_account_number: "34567896788",
    company_name: "surfin company",
    email: "surfin@163.com",
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
  //   bank: "CITIBANK N.A. SINGAPORE",
  //   first_name: "Wang",
  //   last_name: "DACHUI",
  //   swift_code: "CIBBSGSG",
  //   bank_account_number: "34567896788",
  //   email: "surfin@163.com",
  //   address_city: "ss",
  //   address_country: "SGP",
  //   address_line: "CIBBSGSG",
  //   purpose: "Goods trade",
  //   purpose_code: "008-01",
  // };

  await createTransfer({ transaction, source, destination });
};
