import { Relation } from "./relation";

export class Company extends Relation{

  legalStatus: string;
  denomination: string;
  VATNumber: string;
  website: string;
  //readonly closingDate: Date;
  sharesUnitValue: number;
  capital: number;
  //fk_mainContact: People;
  
  
      constructor(id:number, VATLiability: string, taxDebt: boolean, finDebt: boolean,
        legalStatus:string, denomination: string, VATNumber: string, website: string, sharesUnitValue: number, capital:number
      ){
        super(id,VATLiability,taxDebt,finDebt);
        this.legalStatus=legalStatus
        this.denomination=denomination
        this.VATNumber=VATNumber
        this.website=website
        this.sharesUnitValue=sharesUnitValue
        this.capital=capital
      }
    }