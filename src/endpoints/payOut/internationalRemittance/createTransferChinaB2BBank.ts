import { IDestinationBusiness } from "./constant"
import { createTransfer } from "./createTransfer";

export const createTransferChinaB2BBank = async () => {
console.log("b2b china");

    const transaction = {
        destination_currency: "CNY",
        destination_amount: 466.98,
        destination_country: "CHN"
    }

        const source = {
        segment: "business",
        address_country: "CHN",
        address_city: "Aksu",
        address_line: "CHN",
        company_name: "test",
        company_trading_name: "companytradingname",
        company_registration_number: "companyregistrationnumber",
        company_registration_country: "CHN"
    }

   const destination: IDestinationBusiness = {
        segment: "business",
        beneficiary_account_type:"Bank Account",
        swift_code: "ABOCCNBJ070",
        bank_account_number: "3456789099999999",
        company_name: "surfin",
        address_country_name: "China",
        address_country: "CHN",
        address_city: "Aksu",
        address_line: "CHN",
        relation: "Vendor",
        relation_code: "04",
        purpose: "Goods trade",
        purpose_code: "008-01",
        source_of_income: "Bank Deposit",
        source_of_income_code: "01",
        contract_key: "idn-data/easylink_1703848232Sd0o7i.pdf",
        additional_note: "",
        transfer_type: "B2B"
    }

    await createTransfer({ transaction, source, destination });
    
}


        