import { createTransfer } from "./createTransfer";
import { IDestinationCustomer, ISourceBusiness } from "./constant";

export const createTransferSingaporeB2CBank = async () => {
  console.log("sg b2c");

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

  const destination: IDestinationCustomer = {
    segment: "individual",
    beneficiary_account_type: "Bank Account",
    bank: "CITIBANK N.A. SINGAPORE",
    mobile_number: "0292888766",
    first_name: "Wang",
    last_name: "DACHUI",
    swift_code: "CIBBSGSG",
    bank_account_number: "34567896788",
    relation: "Vendor",
    relation_code: "04",
    purpose: "Goods trade",
    purpose_code: "008-01",
  };

  await createTransfer({ transaction, source, destination });
};
