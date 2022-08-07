import { Injectable } from '@nestjs/common';
//import { Relation } from 'src/relation/interfaces/relation.interface';
import { CreateRelationDto } from './create-relation.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relation } from './relation.entity';
import { Contract } from 'src/contract/contract.entity';

@Injectable()
export class RelationService {

    constructor( @InjectRepository(Relation) private relationsRepository: Repository<Relation>){}

 async findAll(): Promise<CreateRelationDto[]> {
    return await this.relationsRepository.find();//find est une fonction fournie par ORM
  }

  async findOne(id): Promise<CreateRelationDto> {
    return await this.relationsRepository.findOne(id)

  }

  async create(relation: CreateRelationDto){
    /*const contract = new Contract()
    contract.budget=89000
    contract.comment="pureee je crois que j'y suis enfin"
    contract.confrere=false
    contract.digitalInvoice=true
    contract.invoiceAnnexe=false
    contract.invoicingMethod="régie"
    relation.contracts.push(contract)*/
    this.relationsRepository.save(relation)
  }


}
