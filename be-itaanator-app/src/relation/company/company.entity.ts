import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, ManyToOne, JoinColumn } from "typeorm";
import { People } from "../people/people.entity";
import { Relation } from "../relation.entity";


@Entity()
@Unique(["VATNumber"])
export class Company extends Relation{ //don't need to extends BaseEntity as Mother Class Relation already done


    @Column()
    @IsString()
    denomination: string;

    
    @Column({default:"SRL"})
    @IsString()
    legalStatus: string;

    @Column()
    @IsString()
    VATNumber: string;

    @Column({nullable:true})
    @IsString()
    website: string;

    //@Column()
    //closingDate: Date;

    @Column()
    sharesUnitValue: number;

    @Column()
    capital: number;

    //recover in JSON the company information (linked to fk_company)
    @ManyToOne(type => People, (people)=>people.fk_company, {eager:true})
    mainContact: People;

    //only fk -->not available in JSON (linked to company)
    @ManyToOne(type => People, (people)=>people.company)
    fk_mainContact: People;




}
