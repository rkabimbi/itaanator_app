import { IsBoolean, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Contract } from "src/contract/contract.entity";
import { Task } from "src/task/task.entity";

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

   
    @Column({default: GENDER.FEMME})
    sexe: GENDER;

    @Column({default: FUNCTION.ASM})
    @IsString()
    function: FUNCTION;

    @Column({default: " "})
    @IsString()
    firstname:string;

    @Column({default: " "})
    @IsString()
    lastname:string;

    @Column({default: " "})
    @IsString()
    emailAdress: string;

    @Column({default: " "})
    @IsString()
    password: string;

    @Column({default: " "})
    @IsString()
    phoneNumber: string;

    @Column({default: 0})
    @IsNumber()
    hourlyRate: number;

    @OneToMany(type => Contract,(contract)=>contract.creator, {eager:true})
    contracts: Contract[];


    @Column({default: false})
    @IsBoolean()
    itaa: boolean;

    @OneToMany(type => Task,(task)=>task.responsibleId, {eager:true})
    tasks: Task[];



    

}
