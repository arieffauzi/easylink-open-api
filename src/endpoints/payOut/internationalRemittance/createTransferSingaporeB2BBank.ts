import { createTransfer } from "./createTransfer";
import { IDestinationBusiness, ISourceBusiness } from "./constant";

export const createTransferSingaporeB2BBank = async () => {
  console.log("sg b2b");

  const transaction = {
    destination_country: "SGP",
    destination_currency: "SGD",
    destination_amount: 90.79,
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
    bank: "CITIBANK N.A. SINGAPORE",
    swift_code: "CIBBSGSG",
    bank_account_number: "34567896788",
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

  await createTransfer({ transaction, source, destination });
};
