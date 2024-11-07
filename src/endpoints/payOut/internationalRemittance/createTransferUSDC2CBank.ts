import { createTransfer } from "./createTransfer";
import { IDestinationCustomer, ISourceCustomer } from "./constant";

export const createTransferUSDC2CBank = async () => {
  console.log("usd usa c2c");

  const transaction = {
    destination_country: "USA",
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

  const destination: IDestinationCustomer = {
    segment: "individual",
    beneficiary_account_type: "Bank Account",
    bank: "CITIBANK N.A. SINGAPORE",
    first_name: "Wang",
    last_name: "DACHUI",
    swift_code: "CIBBSGSG",
    bank_account_number: "34567896788",
    email: "surfin@163.com",
    address_city: "ss",
    address_country: "SGP",
    address_line: "CIBBSGSG",
    purpose: "Goods trade",
    purpose_code: "008-01",
  };

  await createTransfer({ transaction, source, destination });
};
