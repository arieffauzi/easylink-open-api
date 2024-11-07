import { createTransfer } from "./createTransfer";
import { IDestinationCustomer, ISourceBusiness } from "./constant";

export const createTransferMalaysiaB2CBank = async () => {
  console.log("my b2c");

  const transaction = {
    destination_country: "MYS",
    destination_currency: "MYR",
    destination_amount: 90.79,
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
  const destination: IDestinationCustomer = {
    segment: "individual",
    beneficiary_account_type: "Bank Account",
    first_name: "Wang",
    last_name: "DACHUI",
    bank: "AFFIN BANK BERHAD",
    bank_code: "5074",
    bank_account_number: "4123213123123",
    address_city: "ss",
    address_country: "SGP",
    address_line: "CIBBSGSG",
    relation: "Vendor",
    relation_code: "04",
    purpose: "Goods trade",
    purpose_code: "008-01",
    source_of_income: "Bank Deposit",
    source_of_income_code: "01",
  };

  await createTransfer({ transaction, source, destination });
};
