import { Injectable } from '@nestjs/common';
//import { Relation } from 'src/relation/interfaces/relation.interface';
import { CreateTaskDto } from './create-task.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {

    constructor( @InjectRepository(Task) private taskRepository: Repository<Task>){}

 async findAll(): Promise<CreateTaskDto[]> {
    return await this.taskRepository.find();
  }

  async findOne(id): Promise<CreateTaskDto> {
    return await this.taskRepository.findOne(id)

  }



  async create(contract: CreateTaskDto){
    this.taskRepository.save(contract)
  }

  async updateById(id:number, updatedTask: CreateTaskDto){
    const taskToUpdate = await this.taskRepository.findOne({
      where:[{id:id}]
    })

    console.log(taskToUpdate)

    if(updatedTask.hasOwnProperty('taskType'))
    {
      taskToUpdate.taskType=updatedTask.taskType
    }
    if(updatedTask.hasOwnProperty('estimatedHours'))
    {
      taskToUpdate.estimatedHours=updatedTask.estimatedHours
    }
    if(updatedTask.hasOwnProperty('responsibleId'))
    {
      taskToUpdate.responsibleId=updatedTask.responsibleId
    }
    

    return await this.taskRepository.save(taskToUpdate)

  }

}
