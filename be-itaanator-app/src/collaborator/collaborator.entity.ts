import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Contract } from "src/contract/contract.entity";

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, PrimaryColumn, ManyToMany, OneToMany } from "typeorm";


export enum GENDER {
    HOMME="Homme",
    FEMME="Femme"
}

export enum FUNCTION {
    ASM="Advisory Senior Manager",
    TLC="Tax & Legal Consultant",
    SUP="Support",
    PARTNER="Partner",
    DIRECTOR="Director",
    SA="Senior Accountant",
    AM="Account Manager",
}

@Entity()
@Unique(["id"])
export class Collaborator extends BaseEntity{

    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

   
    @Column()
    sexe: GENDER;

    @Column()
    @IsString()
    function: FUNCTION;

    @Column()
    @IsString()
    firstname:string;

    @Column()
    @IsString()
    lastname:string;

    @Column()
    @IsString()
    emailAdress: string;

    @Column()
    @IsString()
    password: string;

    @Column()
    @IsString()
    phoneNumber: string;

    @Column({default: 0})
    @IsNumber()
    hourlyRate: number;

    @OneToMany(type => Contract,(contract)=>contract.creator, {eager:true})
    contracts: Contract[];



    

}
