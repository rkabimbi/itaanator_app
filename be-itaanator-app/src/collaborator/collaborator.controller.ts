import { Controller, Get,Post,Body, Param, Patch } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CreateCollaboratorDto } from './create-collaborator.dto';

//TODO : on doit pas savoir instancier des relations donc mettre en abstract

@Controller('collaborator')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  
  @Get()
  findAll(): Promise<CreateCollaboratorDto[]> {

    return this.collaboratorService.findAll();
  }

  
  @Get(':id')
  //this method have sens to make it easy to deal with the click on one linke of contract array
  findOne(@Param('id') id:number): Promise <CreateCollaboratorDto>{
    return this.collaboratorService.findOne(id);
  }




  @Post()
  create(@Body() newCollaborator){
    this.collaboratorService.create(newCollaborator)
  }

  @Patch(':id')
  updateById(@Param('id') id: number, @Body() updatedCollaborator){
    this.collaboratorService.updateById(id, updatedCollaborator)
  }
}
