import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contract } from './contract.entity';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';



@Module({
  imports:[TypeOrmModule.forFeature([Contract])],
  controllers: [ContractController],
  providers: [ContractService]
})
export class ContractModule {
  

}
