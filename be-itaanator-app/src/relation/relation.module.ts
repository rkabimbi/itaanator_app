import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationController } from './relation.controller';
import { RelationService } from './relation.service';
import { Relation } from './relation.entity'
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports:[TypeOrmModule.forFeature([Relation]), CompanyModule, PeopleModule],
  controllers: [RelationController],
  providers: [RelationService]
})
export class RelationModule {
  

}
