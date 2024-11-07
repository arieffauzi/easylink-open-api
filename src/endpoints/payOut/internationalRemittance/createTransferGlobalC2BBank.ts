import { createTransfer } from "./createTransfer";
import { IDestinationBusiness, ISourceCustomer } from "./constant";

export const createTransferGlobalC2BBank = async () => {
  console.log("global c2b");

  const transaction = {
    destination_country: "SGP",
    destination_currency: "USD",
    destination_amount: 90.79,
  };
  const source: ISourceCustomer = {
    segment: "individual",
    address_country: "IDN",
    address_city: "Aksu",
    address_line: "pateat street",
    id_number: "3213123123123123",
    id_type: "national",
    legal_name_first: "Wang",
    legal_name_last: "DACHUI",
    date_of_birth: "1997-11-02",
    nationality: "IDN",
  };
  const destination: IDestinationBusiness = {
    segment: "business",
    beneficiary_account_type: "Bank Account",
    bank: "CITIBANK N.A. SINGAPORE",
    email: "surfin@163.com",
    swift_code: "CIBBSGSG",
    bank_account_number: "34567896788",
    company_name: "surfin company",
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

  await createTransfer({ transaction, source, destination });
};
