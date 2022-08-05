import { Controller, Get,Post,Body, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './create-company.dto';


@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  
  @Get()
  //return result of findAll() method form CompanyService, so all the companies
  findAll(): Promise<CreateCompanyDto[]> {
    return this.companyService.findAll();
  }

  
  @Get('id/:id')
  //return one company from his id
  findOneById(@Param('id') id:number): Promise <CreateCompanyDto>{
    return this.companyService.findOneById(id);
  }

  @Get('denomination/:denomination')
  //return one company from his denomination
  findOneByDenomination(@Param('denomination') denomination: string): Promise <CreateCompanyDto>{
    return this.companyService.findOneByDenomination(denomination);
  }

  @Get('VATNumber/:VATNumber')
  //return one company from his VAT number
  findOneByVATNumber(@Param('VATNumber') VATNumber: string): Promise <CreateCompanyDto>{
    return this.companyService.findOneByVATNumber(VATNumber);
  }

  @Get('mainContact/:mainContactId')
  //return all the company where the mainContact is :mainContactId
  findAllByMainContactId(@Param('mainContactId') mainContactId: number): Promise<CreateCompanyDto[]>{
    return this.companyService.findAllByMainContactId(mainContactId);

  }


  @Post()
  //create a new company
  create(@Body() newCompany){
    return this. companyService.create(newCompany)
  }
}
