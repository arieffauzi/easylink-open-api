import moment from "moment";
import { getToken } from "./endpoints/getToken";
import { createVa } from "./endpoints/createVA";
import { domesticVerifyBankAccount } from "./endpoints/domesticVerifyBankAccount";
import { availableVirtualAccountBanks } from "./endpoints/availableVirtualAccountBanks";
import { getOccupationList } from "./baseApi/getOccupationList";
import { getProvinceList } from "./baseApi/getProvinceList";
import { getCityList } from "./baseApi/getCityList";

(async () => {
  // getToken();
  // availableVirtualAccountBanks()
  // createVa()
  // domesticVerifyBankAccount();
  // getOccupationList();
  // getProvinceList();
  getCityList();
})();
