import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Collaborator } from "src/collaborator/collaborator.entity";
import { Relation } from "src/relation/relation.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, PrimaryColumn, ManyToMany, ManyToOne } from "typeorm";


export enum TASK {
    ENCODAGE="encodage pièces comptables",
    ISOC="declaration ISOC",
    TVA="déclaration TVA",
    IPP="déclaration IPP",
    PF="plan financier"
}


@Entity()
@Unique(["id"])
export class Task extends BaseEntity{

    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

   
    @Column()
    taskType: TASK;

    @Column()
    estimatedHours: number;

    @ManyToOne(type => Collaborator, (collaborator)=>collaborator.tasks)
    responsibleId: Collaborator;

   


    

}
