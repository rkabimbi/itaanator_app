import { Collaborator, FUNCTION, GENDER } from "src/collaborator/collaborator.entity";
import { Contract } from "src/contract/contract.entity";

//Dto impose une syntaxe/type entre front-end et back-end (principalement à destination des services donc)
export class CreateCollaboratorDto{
    readonly id: number;
    readonly sexe: GENDER;
    readonly function: FUNCTION;
    readonly firstname: string;
    readonly lastname: string;
    readonly emailAdress: string;
    readonly password: string;
    readonly phoneNumber: string;
    readonly hourlyRate: number;
    readonly contracts: Contract[];
}


