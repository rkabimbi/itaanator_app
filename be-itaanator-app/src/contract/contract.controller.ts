import { Controller, Get,Post,Body, Param } from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './create-contract.dto';

//TODO : on doit pas savoir instancier des relations donc mettre en abstract

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  
  @Get()
  findAll(): Promise<CreateContractDto[]> {

    return this.contractService.findAll();
  }

  
  @Get(':id')
  //this method have sens to make it easy to deal with the click on one linke of contract array
  findOne(@Param('id') id:number): Promise <CreateContractDto>{
    return this.contractService.findOne(id);
  }

  /*
  @Get('VATNumber/:VATNumber')
  //return all the contract from one company from VATNumber of the linked company
  findAllByVATNumber(@Param('id') VATNumber:string): Promise <CreateContractDto[]>{
    return this.contractService.findAllByVATNumber(VATNumber);
  }
  */



  @Post()
  create(@Body() newContract){
    this. contractService.create(newContract)
  }
}
