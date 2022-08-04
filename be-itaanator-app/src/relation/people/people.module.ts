import { Module } from '@nestjs/common';

import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { People } from './people.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([People])],
  controllers: [PeopleController],
  providers: [PeopleService]
})
export class PeopleModule {

}



