import { Collaborator } from "src/collaborator/collaborator.entity";
import { Relation } from "src/relation/relation.entity";

//Dto impose une syntaxe/type entre front-end et back-end (principalement à destination des services donc)
export class CreateContractDto{
    readonly id: number;
    readonly confrere: boolean;
    readonly digitalInvoice: boolean;
    readonly invoicingMethod: string;
    readonly invoiceAnnexe: boolean;
    readonly comment: string;
    readonly budget: number;
    //readonly startingMission: Date;
    //readonly lastModification: Date;
    readonly relations: Relation[]
    readonly creator: Collaborator
}


