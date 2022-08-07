import { Injectable } from '@nestjs/common';
//import { Company } from 'src/Company/interfaces/Company.interface';
import { CreatePeopleDto } from './create-people.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './people.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People) private peopleRepository: Repository<People>,
  ) {}

  async findAll(): Promise<CreatePeopleDto[]> {
    return await this.peopleRepository.find(); //find est une fonction fournie par ORM
  }

  async findOneByNN(nn): Promise<CreatePeopleDto> {
    return await this.peopleRepository.findOne({
      where: [{ nationalNumber: nn }],
    });
  }

  async findAllByName(firstname, lastname): Promise<CreatePeopleDto[]> {
    return await this.peopleRepository.find({
      where: [{ firstname: firstname }, { lastname: lastname }],
    });
  }

  async create(people: CreatePeopleDto) {
    this.peopleRepository.save(people);
  }

  async updateById(id: number, updatedPeople: CreatePeopleDto) {
    //retrieve concerned company
    const peopleToUpdate = await this.peopleRepository.findOne({
      where: [{ id: id }],
    });

    console.log(peopleToUpdate);

    //apply modification
    if (updatedPeople.hasOwnProperty('nationalNumber')) {
      peopleToUpdate.nationalNumber = updatedPeople.nationalNumber;
    }

    if (updatedPeople.hasOwnProperty('firstname')) {
      peopleToUpdate.firstname = updatedPeople.firstname;
    }
    if (updatedPeople.hasOwnProperty('lastname')) {
      peopleToUpdate.lastname = updatedPeople.lastname;
    }

    if (updatedPeople.hasOwnProperty('language')) {
      peopleToUpdate.language = updatedPeople.language;
    }
    if (updatedPeople.hasOwnProperty('phoneNumber')) {
      peopleToUpdate.phoneNumber = updatedPeople.phoneNumber;
    }
    if (updatedPeople.hasOwnProperty('cheadquartersAdress')) {
      peopleToUpdate.headquartersAdress = updatedPeople.headquartersAdress;
    }
    if (updatedPeople.hasOwnProperty('email')) {
      peopleToUpdate.email = updatedPeople.email;
    }
    if (updatedPeople.hasOwnProperty('sexe')) {
      peopleToUpdate.sexe = updatedPeople.sexe;
    }
    if (updatedPeople.hasOwnProperty('pep')) {
      peopleToUpdate.pep = updatedPeople.pep;
    }
    if (updatedPeople.hasOwnProperty('companies')) {
      peopleToUpdate.companies = updatedPeople.companies;
    }

    await this.peopleRepository.save(peopleToUpdate); //save verify if the object in argument doesn't already exist
  }
}
