import { createTransfer } from "./createTransfer";
import { IDestinationCustomer, ISourceCustomer } from "./constant";

export const createTransferChinaC2CWallet = async () => {
  const transaction = {
    destination_currency: "CNY",
    destination_amount: 466.98,
    destination_country: "CHN",
  };
  const source: ISourceCustomer = {
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
    beneficiary_account_type: "eWallet",
    ewallet_id: "13621134092",
    id_number: "370782199004251132",
    date_of_birth: "1977-09-04",
    first_name: "Wang",
    last_name: "DACHUI",
    relation: "Vendor",
    relation_code: "04",
    purpose: "Send to self",
    purpose_code: "004-02",
    source_of_income_code: "01",
    source_of_income: "Bank Deposit",
  };

  await createTransfer({ transaction, source, destination });
};
