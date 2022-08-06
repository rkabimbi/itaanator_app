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

  /*
  async findAllByVATNumber(VATNumber): Promise<CreateContractDto[]> {
    return await this.contractRepository.find(
      {
        //where:[{contracts.VATNumber: VATNumber}]
      }
    )

  }
  */





  async create(contract: CreateContractDto){
    this.contractRepository.save(contract)
  }
}
