import { IsBoolean, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Company } from "../company/company.entity";
import { Relation } from "../relation.entity";


@Entity()
@Unique(["nationalNumber"])
export class People extends Relation{ //don't need to extends BaseEntity as Mother Class Relation already done

    @Column()
    @IsString()
    nationalNumber: string;
    
    
    @Column()
    @IsString()
    firstname: string;

    
    @Column({default:"SRL"})
    @IsString()
    lastname: string;

    @Column()
    @IsString()
    language: string;

    @Column()
    @IsString()
    phoneNumber: string;

    //@Column()
    //birthDate: Date;

    @Column()
    @IsString()
    headquartersAdress: string;

    @Column()
    @IsString()
    email: string;

    @Column()
    @IsString()
    sexe: string;


    @Column()
    @IsBoolean()
    pep: boolean;


    //recover in JSON the list of all company information which are link to this People (linked to fk_mainContact)
    @OneToMany(type => Company,(company)=>company.fk_mainContact, {eager:true})
    companies: Company[];



   

}
