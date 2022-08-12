import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './collaborator.entity';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';



@Module({
  imports:[TypeOrmModule.forFeature([Collaborator])],
  controllers: [CollaboratorController],
  providers: [CollaboratorService]
})
export class CollaboratorModule {
  

}
