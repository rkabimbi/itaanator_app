import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(["id"])
export class Relation extends BaseEntity{

    @PrimaryGeneratedColumn()
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
