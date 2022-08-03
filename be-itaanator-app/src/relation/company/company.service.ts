import { Injectable } from '@nestjs/common';
//import { Company } from 'src/Company/interfaces/Company.interface';
import { CreateCompanyDto } from './create-company.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {

  constructor( @InjectRepository(Company) private companyRepository: Repository<Company>){}

 async findAll(): Promise<CreateCompanyDto[]> {
    return await this.companyRepository.find();//find est une fonction fournie par ORM
  }

  async findOneById(id): Promise<CreateCompanyDto> {
    return await this.companyRepository.findOne(
      {
        where:[{id: id}]
      }
    )

  }

  async findOneByDenomination(denomination): Promise<CreateCompanyDto> {
    return await this.companyRepository.findOne(
      {
        where:[{denomination: denomination}]
      }
    )

  }

  async findOneByVATNumber(VATNumber): Promise<CreateCompanyDto> {
    return await this.companyRepository.findOne(
      {
        where:[{VATNumber: VATNumber}]
      }
    )

  }

  async create(Company: CreateCompanyDto){
    this.companyRepository.save(Company)
  }



}
