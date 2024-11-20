interface ITransaction {
    destination_country: string;
    destination_currency: string;
    destination_amount: number;
}

export interface ISourceBusiness {
    segment: string;
    address_country: string;
    address_city: string;
    address_line: string;
    company_name: string;
    company_trading_name: string;
    company_registration_number: string;
    company_registration_country: string;
}

export interface ISourceCustomer {
    segment: string;
    address_country: string;
    address_city: string;
    address_line: string;
    id_number:string;
    id_type:string;
    legal_name_first:string;
    legal_name_last:string;
    date_of_birth:string;
    nationality:string;
    gender?:string;
    mobile_number?: string;
    
}

// all optional cause some country destination params are different
export interface IDestinationBusiness {
    segment: "business";
    beneficiary_account_type?: string;
    swift_code?: string;
    bank_account_number?: string;
    bank?:string;
    bank_code?:string;
    branch_code?:string;
    mobile_number?: string;
    sort_code?:string;
    email?:string;
    company_name?: string;
    nib?:string;
    iban?:string;
    address_country_name?: string;
    address_country?: string;
    address_city?: string;
    address_line?: string;
    address_zip?:string;
    date_of_incorporation?:string;
    relation?: string;
    relation_code?: string;
    purpose?: string;
    purpose_code?: string;
    source_of_income?: string;
    source_of_income_code?: string;
    contract_key?: string;
    additional_note?: string;
    transfer_type?: string;
}

// all optional cause some country destination params are different
export interface IDestinationCustomer {
    segment?: "individual";
    beneficiary_account_type?: string;
    first_name?: string;
    last_name?: string;
    email?:string;
    swift_code?:string
    bank?: string;
    bank_code?: string;
    ewallet_id?:string;
    ewallet_type?:string;
    bank_account_number?: string;
    id_number?:string;
    address_zip?:string;
    iban?:string;
    branch_code?:string;
    sort_code?:string;
    date_of_birth?:string;
    mobile_number?:string;
    address_city?: string;
    address_country?: string;
    address_line?: string;
    relation?: string;
    relation_code?: string;
    purpose?: string;
    purpose_code?: string;
    source_of_income?: string;
    source_of_income_code?: string;
    occupation?:string;
    occupation_code?:string;
}

type Destination = IDestinationBusiness | IDestinationCustomer;
type Source = ISourceBusiness | ISourceCustomer;

export interface ITransferParams {
    transaction: ITransaction;
    source: Source;
    destination: Destination;
}