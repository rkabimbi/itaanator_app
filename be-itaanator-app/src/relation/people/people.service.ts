import { Injectable } from '@nestjs/common';
//import { Company } from 'src/Company/interfaces/Company.interface';
import { CreatePeopleDto } from './create-people.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './people.entity';

@Injectable()
export class PeopleService {

  constructor( @InjectRepository(People) private peopleRepository: Repository<People>){}

 async findAll(): Promise<CreatePeopleDto[]> {
    return await this.peopleRepository.find();//find est une fonction fournie par ORM
  }

  async findOneByNN(nn): Promise<CreatePeopleDto> {
    return await this.peopleRepository.findOne(
      {
        where:[{nationalNumber: nn}]
      }
    )

  }

  async findAllByName(firstname, lastname): Promise<CreatePeopleDto[]> {
    return await this.peopleRepository.find(
      {
        where:[
          {firstname: firstname} ,
          {lastname: lastname} 
        ]
      }
    )

  }

  

  async create(people: CreatePeopleDto){
    this.peopleRepository.save(people)
  }



}
