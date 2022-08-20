import { Controller, Get,Post,Body, Param, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './create-task.dto';

//TODO : on doit pas savoir instancier des relations donc mettre en abstract

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  
  @Get()
  findAll(): Promise<CreateTaskDto[]> {

    return this.taskService.findAll();
  }

  
  @Get(':id')
  //this method have sens to make it easy to deal with the click on one linke of contract array
  findOne(@Param('id') id:number): Promise <CreateTaskDto>{
    return this.taskService.findOne(id);
  }




  @Post()
  create(@Body() newTask){
    this.taskService.create(newTask)
  }

  @Patch(':id')
  updateById(@Param('id') id: number, @Body() updatedTask){
    this.taskService.updateById(id, updatedTask)
  }
}
