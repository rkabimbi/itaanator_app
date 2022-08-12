import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Collaborator } from "src/collaborator/collaborator.entity";
import { Relation } from "src/relation/relation.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, PrimaryColumn, ManyToMany, ManyToOne } from "typeorm";


@Entity()
@Unique(["id"])
export class Contract extends BaseEntity{

    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

   
    @Column({default: false})
    confrere: boolean;

    @Column({default: false})
    digitalInvoice: boolean;

    @Column({default: false})
    invoiceAnnexe: boolean;

    @Column()
    @IsString()
    invoicingMethod: string;

    @Column({nullable: true})
    @IsString()
    comment: string;

    @Column({nullable: true})
    @IsNumber()
    budget: number;

    @ManyToMany(() => Relation, (relation) => relation.contracts)
    relations: Relation[]

    @ManyToOne(type => Collaborator, (collaborator)=>collaborator.contracts)
    creator: Collaborator;



    

}
