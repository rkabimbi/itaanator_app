import { Controller, Get,Post,Body, Param } from '@nestjs/common';
import { RelationService } from './relation.service';
import { CreateRelationDto } from './create-relation.dto';

//TODO : on doit pas savoir instancier des relations donc mettre en abstract

@Controller('relation')
export class RelationController {
  constructor(private readonly relationService: RelationService) {}

  
  @Get()
  findAll(): Promise<CreateRelationDto[]> {

    return this.relationService.findAll();
  }

  
  @Get(':id')
  findOne(@Param('id') id:number): Promise <CreateRelationDto>{
    return this.relationService.findOne(id);
  }



  @Post()
  create(@Body() newRelation){
    this. relationService.create(newRelation)
  }
}
