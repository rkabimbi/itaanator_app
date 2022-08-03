import { CreateRelationDto } from "../create-relation.dto";

//Dto impose une syntaxe/type entre front-end et back-end (principalement à destination des services donc)
export class CreateCompanyDto extends CreateRelationDto{
    readonly legalStatus: string;
    readonly denomination: string;
    readonly VATNumber: string;
    readonly website: string;
    //readonly closingDate: Date;
    readonly sharesUnitValue: number;
    readonly capital: number;
    
    
}
