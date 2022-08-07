import { Contract } from "../contract/contractModel";

export enum VATLiability{
    MENSUEL= "Mensuel",
    TRIMESTRIEL ="Trimestriel",
    NA="Non assujetti",
    FRANCHISE="Franchisé",
    EXEMPTE="Exempté"

}

export interface IRelation {
  id: number;
  VATLiability: VATLiability;
  taxDebt: boolean;
  finDebt: boolean;
  contracts: Contract[];
}

export class Relation implements IRelation {
    id;
    VATLiability;
    taxDebt;
    finDebt;
    contracts;

    constructor(id:number, VATLiability: VATLiability, taxDebt:boolean,findebt:boolean,contracts: Contract[]){
        this.id=id;
        this.VATLiability=VATLiability;
        this.taxDebt=taxDebt;
        this.finDebt=findebt;
        this.contracts=contracts
    }
}
