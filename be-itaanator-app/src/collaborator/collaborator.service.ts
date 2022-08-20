import { Injectable } from '@nestjs/common';
//import { Relation } from 'src/relation/interfaces/relation.interface';
import { CreateCollaboratorDto } from './create-collaborator.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collaborator } from './collaborator.entity';

@Injectable()
export class CollaboratorService {

    constructor( @InjectRepository(Collaborator) private collaboratorRepository: Repository<Collaborator>){}

 async findAll(): Promise<CreateCollaboratorDto[]> {
    return await this.collaboratorRepository.find();
  }

  async findOne(id): Promise<CreateCollaboratorDto> {
    return await this.collaboratorRepository.findOne(id)

  }



  async create(collaborator: CreateCollaboratorDto){
    this.collaboratorRepository.save(collaborator)
  }


  async updateById(id:number, updatedCollaborator: CreateCollaboratorDto){
    const collaboratorToUpdate = await this.collaboratorRepository.findOne({
      where:[{id:id}]
    })

    console.log(collaboratorToUpdate)

    if(updatedCollaborator.hasOwnProperty('sexe'))
    {
      collaboratorToUpdate.sexe=updatedCollaborator.sexe
    }
    if(updatedCollaborator.hasOwnProperty('function'))
    {
      collaboratorToUpdate.function=updatedCollaborator.function
    }
    if(updatedCollaborator.hasOwnProperty('firstname'))
    {
      collaboratorToUpdate.firstname=updatedCollaborator.firstname
    }
    if(updatedCollaborator.hasOwnProperty('lastname'))
    {
      collaboratorToUpdate.lastname=updatedCollaborator.lastname
    }
    if(updatedCollaborator.hasOwnProperty('emailAdress'))
    {
      collaboratorToUpdate.emailAdress=updatedCollaborator.emailAdress
    }
    if(updatedCollaborator.hasOwnProperty('password'))
    {
      collaboratorToUpdate.password=updatedCollaborator.password
    }
    if(updatedCollaborator.hasOwnProperty('phoneNumber'))
    {
      collaboratorToUpdate.phoneNumber=updatedCollaborator.phoneNumber
    }
    if(updatedCollaborator.hasOwnProperty('hourlyRate'))
    {
      collaboratorToUpdate.hourlyRate=updatedCollaborator.hourlyRate
    }

    if(updatedCollaborator.hasOwnProperty('contracts'))
    {
      collaboratorToUpdate.contracts=updatedCollaborator.contracts
    }

    if(updatedCollaborator.hasOwnProperty('tasks'))
    {
      collaboratorToUpdate.tasks=updatedCollaborator.tasks
    }

    if(updatedCollaborator.hasOwnProperty('itaa'))
    {
      collaboratorToUpdate.itaa=updatedCollaborator.itaa
    }

    return await this.collaboratorRepository.save(collaboratorToUpdate)

  }

}
