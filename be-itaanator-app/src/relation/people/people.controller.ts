import { Controller, Get,Post,Body, Param, Patch } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDto } from './create-people.dto';


@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  
  @Get()
  //return all the people
  findAll(): Promise<CreatePeopleDto[]> {
    return this.peopleService.findAll();
  }

  
  @Get('nn/:nn')
  //return one people from his NN
  findOneByNN(@Param('nn') nn:string): Promise <CreatePeopleDto>{
    return this.peopleService.findOneByNN(nn);
  }

  @Get('name/:firstname /:lastname')
  //return all the people who have the firstname and lastname
  findAllByName(@Param('firstname') firstname: string, @Param('lastname') lastname:string): Promise <CreatePeopleDto[]>{
    return this.peopleService.findAllByName(firstname,lastname);
  }



  @Post()
  //create a new people
  create(@Body() newPeople){
    return this. peopleService.create(newPeople)
  }

  @Patch(':id')
  updateById(@Param('id') id:number, @Body() updatedPeople: CreatePeopleDto){
    return this. peopleService.updateById(id,updatedPeople)
  }

}
