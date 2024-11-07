import moment from "moment";
import { getToken } from "./endpoints/getToken";
import { internationalConfirmTransfer } from "./endpoints/payOut/internationalRemittance/internationalConfirmTransfer";
import { getRemittanceList } from "./endpoints/payOut/getRemittanceList";



(async () => {
  // internationalConfirmTransfer();
  getRemittanceList()
})();
