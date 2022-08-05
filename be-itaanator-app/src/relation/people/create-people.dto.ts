import { Company } from "../company/company.entity";
import { CreateRelationDto } from "../create-relation.dto";

//Dto impose une syntaxe/type entre front-end et back-end (principalement à destination des services donc)
export class CreatePeopleDto extends CreateRelationDto{
    readonly firstname: string;
    readonly lastname: string;
    readonly language: string;
    readonly phoneNumber: string;
    readonly nationalNumber: string;
    //readonly birthDate: Date;
    readonly headquartersAdress: string;
    readonly email: string;
    readonly pep: boolean;
    

    
    
}
