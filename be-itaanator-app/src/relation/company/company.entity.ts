import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
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

    @Column()
    @IsString()
    website: string;

    //@Column()
    //closingDate: Date;

    @Column()
    sharesUnitValue: number;

    @Column()
    capital: number;

}
