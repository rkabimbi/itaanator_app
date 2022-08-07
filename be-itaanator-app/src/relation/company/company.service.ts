import { Injectable } from '@nestjs/common';
//import { Company } from 'src/Company/interfaces/Company.interface';
import { CreateCompanyDto } from './create-company.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Company } from './company.entity';
import { People } from '../people/people.entity';
import { Contract } from 'src/contract/contract.entity';

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

  async create(company: CreateCompanyDto){
    this.companyRepository.save(company)
  }

  async findAllByMainContactId(mainContactId): Promise<CreateCompanyDto[]>{

      const qb= this.companyRepository.createQueryBuilder('recupMainContact')//on cree la qb et on lui donne un nom
      return await qb.select("company").from(Company,"company").where("company.mainContact=:mainContactId",{mainContactId:mainContactId}).getMany()

}

  async updateById(id: number, updatedCompany: CreateCompanyDto){
    //retrieve concerned company 
    const companyToUpdate=  await this.companyRepository.findOne(
      {
        where:[{id:id}]
      }
    );

   console.log(companyToUpdate)


    //apply modification
    if(updatedCompany.hasOwnProperty('VATLiability')){ //hasOwnProprerty c'est pour la problématique des boolean (donc j'applique tjr pr faire simple)
      companyToUpdate.VATLiability=updatedCompany.VATLiability;
    }
    if(updatedCompany.hasOwnProperty('VATNumber')){
      companyToUpdate.VATNumber=updatedCompany.VATNumber;
    }

    if(updatedCompany.hasOwnProperty('denomination')){
      companyToUpdate.denomination=updatedCompany.denomination;
    }
    if(updatedCompany.hasOwnProperty('legalStatus')){
      companyToUpdate.legalStatus=updatedCompany.legalStatus;
    }
    if(updatedCompany.hasOwnProperty('website')){
      companyToUpdate.website=updatedCompany.website;
    }
    if(updatedCompany.hasOwnProperty('sharesUnitValue')){
      companyToUpdate.sharesUnitValue=updatedCompany.sharesUnitValue;
    }
    if(updatedCompany.hasOwnProperty('capital')){
      companyToUpdate.capital=updatedCompany.capital;
    }
    if(updatedCompany.hasOwnProperty('fk_mainContact')){
      companyToUpdate.fk_mainContact=updatedCompany.fk_mainContact;
    }
    if(updatedCompany.hasOwnProperty('taxDebt')){
      companyToUpdate.taxDebt=updatedCompany.taxDebt;
    }
    if(updatedCompany.hasOwnProperty('finDebt')){
      companyToUpdate.finDebt=updatedCompany.finDebt;
    }
    if(updatedCompany.hasOwnProperty('contracts')){
      companyToUpdate.contracts=updatedCompany.contracts;
    }



    await this.companyRepository.save(companyToUpdate)//save verify if the object in argument doesn't already exist
   
  }


}