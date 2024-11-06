import moment from "moment";
import { getToken } from "./endpoints/getToken";
import { createDomesticTransfer } from "./endpoints/payOut/domesticTransfer/createDomasticTransfer";
import { createTransferChinaB2BBank } from "./endpoints/payOut/internationalRemittance/createTransferChinaB2BBank";
import { createTransferChinaC2CBank } from "./endpoints/payOut/internationalRemittance/createTransferChinaC2CBank";
import { retrieveAQuote } from "./endpoints/payOut/internationalRemittance/retrieveAQuote";
import { createTransferChinaC2CWallet } from "./endpoints/payOut/internationalRemittance/createTransferChinaC2CWallet";
import { createTransferChinaB2C } from "./endpoints/payOut/internationalRemittance/createTransferChinaB2C";
import { createTransferGlobalB2BBank } from "./endpoints/payOut/internationalRemittance/createTransferGlobalB2BBank";
import { internationalConfirmTransfer } from "./endpoints/payOut/internationalRemittance/internationalConfirmTransfer";
import { createTransferGlobalC2CBank } from "./endpoints/payOut/internationalRemittance/createTransferGlobalC2CBank";
import { createTransferGlobalB2CBank } from "./endpoints/payOut/internationalRemittance/createTransferGlobalB2CBank";
import { createTransferGlobalC2BBank } from "./endpoints/payOut/internationalRemittance/createTransferGlobalC2BBank";
import { createTransferHongKongB2BBank } from "./endpoints/payOut/internationalRemittance/createTransferHongKongB2BBank";
import { createTransferHongKongC2CBank } from "./endpoints/payOut/internationalRemittance/createTransferHongKongC2CBank";
import { createTransferUSDB2BBank } from "./endpoints/payOut/internationalRemittance/createTransferUSDB2BBank";
import { createTransferUSDC2CBank } from "./endpoints/payOut/internationalRemittance/createTransferUSDC2CBank";
import { createTransferUSDB2CBank } from "./endpoints/payOut/internationalRemittance/createTransferUSDB2CBank";
import { createTransferUSDC2BBank } from "./endpoints/payOut/internationalRemittance/createTransferUSDC2BBank";
import { createTransferSingaporeB2BBank } from "./endpoints/payOut/internationalRemittance/createTransferSingaporeB2BBank";
import { getBankList } from "./baseApi/getBankList";
import { createTransferSingaporeC2CBank } from "./endpoints/payOut/internationalRemittance/createTransferSingaporeC2CBank";


(async () => {
  // getBankList()
  // getToken();
  // createTransferChinaB2BBank();
  // createTransferChinaC2CBank();
  // createTransferChinaC2CWallet()
  // createTransferChinaB2C();
  // createTransferGlobalB2BBank();
  // createTransferGlobalC2CBank()
  // createTransferGlobalB2CBank();
  // createTransferGlobalC2BBank();
  // createTransferHongKongB2BBank()
  // createTransferHongKongC2CBank()
  // createTransferHongKongC2CBank();
  // createTransferUSDB2BBank();
  // createTransferUSDC2CBank();
  // createTransferUSDB2CBank();
  // createTransferUSDC2BBank();
  // createTransferSingaporeB2BBank();
  // createTransferSingaporeC2CBank()
  internationalConfirmTransfer();
  // listAllBalances()
  // retrieveAQuote();
})();
