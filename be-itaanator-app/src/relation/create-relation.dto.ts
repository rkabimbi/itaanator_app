import { Contract } from "src/contract/contract.entity";
import { VATLiability } from "./relation.entity";

//Dto impose une syntaxe/type entre front-end et back-end (principalement à destination des services donc)
export class CreateRelationDto{
    readonly id: number;
    //readonly timestamp: Date;
    readonly VATLiability: VATLiability;
    readonly taxDebt: boolean;
    readonly finDebt: boolean;
    readonly contracts: Contract[];
  
}


