import { Injectable } from '@nestjs/common';
//import { Relation } from 'src/relation/interfaces/relation.interface';
import { CreateRelationDto } from './create-relation.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relation } from './relation.entity';

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
    this.relationsRepository.save(relation)
  }
}
