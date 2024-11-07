import { IDestinationCustomer, ISourceBusiness } from "./constant";
import { createTransfer } from "./createTransfer";

export const createTransferChinaB2C = async () => {
  const transaction = {
    destination_currency: "CNY",
    destination_amount: 466.98,
    destination_country: "CHN",
  };
  const source: ISourceBusiness = {
    segment: "business",
    address_country: "CHN",
    address_city: "Aksu",
    address_line: "CHN",
    company_name: "test",
    company_trading_name: "companytradingname",
    company_registration_number: "companyregistrationnumber",
    company_registration_country: "CHN",
  };

  const destination: IDestinationCustomer = {
    segment: "individual",
    beneficiary_account_type: "Bank Account",
    first_name: "Wang",
    last_name: "DACHUI",
    swift_code: "ABOCCNBJ070",
    bank_account_number: "3456789099999999",
    id_number: "370782199004251132",
    mobile_number: "13621115092",
    relation: "Vendor",
    relation_code: "04",
    purpose: "Goods trade",
    purpose_code: "008-01",
  };

  await createTransfer({ transaction, source, destination });
};
