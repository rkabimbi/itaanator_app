import { Contract } from "../../contract/contractModel";
import { People } from "../people/peopleModel";
import { Relation } from "../relationModel";
import { VATLiability } from "../relationModel";

export interface ICompany{
    legalStatus: string;
    denomination: string;
    VATNumber: string;
    website: string;
    sharesUnitValue: number;
    capital: number;
    fk_mainContact: People;
}


export class Company  extends Relation implements ICompany {
    
    legalStatus;
    denomination;
    VATNumber;
    website;
    sharesUnitValue;
    capital;
    fk_mainContact;


    constructor(id:number, VATLiability: VATLiability, taxDebt:boolean,findebt:boolean,contracts: Contract[],legalStatus: string, denomination: string, VATNumber: string, website: string, sharesUnitValue: number, capital: number, fk_mainContact: People){
        super(id,VATLiability,taxDebt,findebt,contracts);
        this.legalStatus=legalStatus;
        this.denomination=denomination;
        this.VATNumber=VATNumber;
        this.website=website;
        this.sharesUnitValue=sharesUnitValue
        this.capital=capital
        this.fk_mainContact=fk_mainContact
    }

}