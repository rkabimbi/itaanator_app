import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RelationModule } from './relation/relation.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContractModule } from './contract/contract.module';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { TaskModule } from './task/task.module';


@Module({
  imports: [
    RelationModule,
    ContractModule,CollaboratorModule, TaskModule,   
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rootroot',
    database: 'db_itaanator',
    entities: ["dist/**/*.entity{.ts,.js}"],
    //autoLoadEntities: true,
    synchronize: true,
  
  }),],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
