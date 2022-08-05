import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, PrimaryColumn } from "typeorm";


@Entity()
@Unique(["id"])
export class Relation extends BaseEntity{

    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

    //@Column()
    //timestamp: Date;
    
    @Column({default:"MENSUEL"})
    @IsString()
    VATLiability: string;

    @Column()
    taxDebt: boolean;

    @Column()
    finDebt: boolean;
    

}
