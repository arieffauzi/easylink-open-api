import { createTransfer } from "./createTransfer";
import { IDestinationCustomer } from "./constant";

export const createTransferChinaC2CBank = async () => {
  console.log("C2C");

  const transaction = {
    destination_currency: "CNY",
    destination_amount: 466.98,
    destination_country: "CHN",
  };
  const source = {
    segment: "individual",
    address_country: "CHN",
    address_city: "Aksu",
    address_line: "CHN",
    id_number: "Wasa123123123123",
    id_type: "passport",
    legal_name_first: "Wang",
    legal_name_last: "DACHUI",
    date_of_birth: "1997-11-02",
    nationality: "IDN",
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
