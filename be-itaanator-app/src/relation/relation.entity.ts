import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Contract } from "src/contract/contract.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";


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
    
    @ManyToMany(() => Contract, (contract) => contract.relations,{eager:true})
    @JoinTable()
    contracts: Contract[]

}
