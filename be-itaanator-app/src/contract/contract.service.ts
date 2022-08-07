import { Injectable } from '@nestjs/common';
//import { Relation } from 'src/relation/interfaces/relation.interface';
import { CreateContractDto } from './create-contract.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './contract.entity';

@Injectable()
export class ContractService {

    constructor( @InjectRepository(Contract) private contractRepository: Repository<Contract>){}

 async findAll(): Promise<CreateContractDto[]> {
    return await this.contractRepository.find();
  }

  async findOne(id): Promise<CreateContractDto> {
    return await this.contractRepository.findOne(id)

  }



  async create(contract: CreateContractDto){
    this.contractRepository.save(contract)
  }

  async updateById(id:number, updatedContract: CreateContractDto){
    const contractToUpdate = await this.contractRepository.findOne({
      where:[{id:id}]
    })

    console.log(contractToUpdate)

    if(updatedContract.hasOwnProperty('confrere'))
    {
      contractToUpdate.confrere=updatedContract.confrere
    }
    if(updatedContract.hasOwnProperty('digitalInvoice'))
    {
      contractToUpdate.digitalInvoice=updatedContract.digitalInvoice
    }
    if(updatedContract.hasOwnProperty('invoiceAnnexe'))
    {
      contractToUpdate.invoiceAnnexe=updatedContract.invoiceAnnexe
    }
    if(updatedContract.hasOwnProperty('invoicingMethod'))
    {
      contractToUpdate.invoicingMethod=updatedContract.invoicingMethod
    }
    if(updatedContract.hasOwnProperty('comment'))
    {
      contractToUpdate.comment=updatedContract.comment
    }
    if(updatedContract.hasOwnProperty('budget'))
    {
      contractToUpdate.budget=updatedContract.budget
    }
    if(updatedContract.hasOwnProperty('relations'))
    {
      contractToUpdate.relations=updatedContract.relations
    }

    return await this.contractRepository.save(contractToUpdate)

  }

}
