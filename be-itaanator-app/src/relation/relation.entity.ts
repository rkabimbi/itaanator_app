import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Contract } from "src/contract/contract.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";


export enum VATLiability{
    MENSUEL= "Mensuel",
    TRIMESTRIEL ="Trimestriel",
    NA="Non assujetti",
    FRANCHISE="Franchisé",
    EXEMPTE="Exempté"

}


@Entity()
@Unique(["id"])
export class Relation extends BaseEntity{

    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

    //@Column()
    //timestamp: Date;
    
    
    @Column({ type:'enum',enum:VATLiability, default:VATLiability.TRIMESTRIEL})
    VATLiability: VATLiability;

    @Column({default:false})
    taxDebt: boolean;

    @Column({default:false})
    finDebt: boolean;
    
    @ManyToMany(() => Contract, (contract) => contract.relations,{eager:true})
    @JoinTable()
    contracts: Contract[];




}
