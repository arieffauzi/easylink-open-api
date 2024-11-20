import moment from "moment";
import { internationalConfirmTransfer } from "./endpoints/payOut/internationalRemittance/internationalConfirmTransfer";
import { createTransferSEPABank } from "./endpoints/payOut/internationalRemittance/createTransferSEPABank";
import { createTransferNepal } from "./endpoints/payOut/internationalRemittance/createTransferNepal";
import { createTransferPakistan } from "./endpoints/payOut/internationalRemittance/createTransferPakistan";
import { createTransferAfrica } from "./endpoints/payOut/internationalRemittance/createTransferAfrica";
import { getInternationalTransfer } from "./endpoints/payOut/internationalRemittance/getInternationalTransfer";
import { createTransferThai } from "./endpoints/payOut/internationalRemittance/createTransferThai";
import { getVAPaymentRecord } from "./endpoints/payIn/virtualAccountAPI/getVAPaymentRecord";
import { listMerchantVAPaymentRecord } from "./endpoints/payIn/virtualAccountAPI/listMerchantVAPaymentRecord";
import { domesticVerifyBankAccount } from "./endpoints/payOut/domesticTransfer/domesticVerifyBankAccount";
import { createDomesticTransfer } from "./endpoints/payOut/domesticTransfer/createDomasticTransfer";
import { getDomesticTransfer } from "./endpoints/payOut/domesticTransfer/getDomesticTransfer";
import { getCityList } from "./baseApi/getCityList";




(async () => {
  // createTransferSEPABank();
  // createTransferNepal()
  // createTransferPakistan()
  // createTransferAfrica();
  // createTransferThai();
  // getInternationalTransfer();
  // internationalConfirmTransfer();
  // getVAPaymentRecord();
  // domesticVerifyBankAccount()
  // createDomesticTransfer()
  // getDomesticTransfer()
  // getCityList();
  domesticVerifyBankAccount();
  // listMerchantVAPaymentRecord()
  // getRemittanceList()
})();
