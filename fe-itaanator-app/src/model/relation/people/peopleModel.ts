import { Contract } from "../../contract/contractModel";
import { Company } from "../company/companyModel";
import { Relation } from "../relationModel";
import { VATLiability } from "../relationModel";

export interface IPeople{

    firstname: string;
    lastname: string;
    language: string;
    phoneNumber: string;
    headquartersAdress: string;
    email: string;
    pep: boolean;
    companies: Company[];
    sexe: string;
}

export class People extends Relation implements IPeople{
    firstname;
    lastname;
    language;
    phoneNumber;
    headquartersAdress;
    email;
    pep;
    companies;
    sexe;

    constructor(id:number, VATLiability: VATLiability, taxDebt:boolean,finDebt:boolean,contracts: Contract[],firstname: string,lastname: string, language: string, phoneNumber: string, headquartersAdress: string, email: string, pep: boolean,
        companies: Company[], sexe: string){
            super(id, VATLiability,taxDebt,finDebt,contracts)
            this.firstname=firstname,
            this.lastname=lastname,
            this.language=language,
            this.phoneNumber=phoneNumber,
            this.headquartersAdress=headquartersAdress,
            this.email=email,
            this.pep=pep,
            this.companies=companies,
            this.sexe=sexe
        }

}