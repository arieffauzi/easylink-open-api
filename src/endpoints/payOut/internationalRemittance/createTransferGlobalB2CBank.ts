import { createTransfer } from "./createTransfer";
import { IDestinationCustomer, ISourceBusiness } from "./constant";

export const createTransferGlobalB2CBank = async () => {
  const transaction = {
    destination_country: "SGP",
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
  const destination: IDestinationCustomer = {
    segment: "individual",
    beneficiary_account_type: "Bank Account",
    bank: "CITIBANK N.A. SINGAPORE",
    email: "surfin@163.com",
    first_name: "Wang",
    last_name: "DACHUI",
    swift_code: "CIBBSGSG",
    bank_account_number: "34567896788",
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
