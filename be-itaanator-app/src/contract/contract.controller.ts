import { Controller, Get,Post,Body, Param, Patch } from '@nestjs/common';
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




  @Post()
  create(@Body() newContract){
    this. contractService.create(newContract)
  }

  @Patch(':id')
  updateById(@Param('id') id: number, @Body() updatedContract){
    this.contractService.updateById(id, updatedContract)
  }
}
