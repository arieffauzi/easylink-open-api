import moment from "moment";
import { getToken } from "./endpoints/getToken";
import { createVa } from "./endpoints/createVA";
import { domesticVerifyBankAccount } from "./endpoints/domesticVerifyBankAccount";
import { availableVirtualAccountBanks } from "./endpoints/availableVirtualAccountBanks";

(async () => {
  // getToken();
  availableVirtualAccountBanks()
  // createVa()
  // domesticVerifyBankAccount();
})();
