import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encounter } from './entities/encounter.entities';
import { EncounterService } from './encounter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Encounter])],
  //Register User entity so TypeORM create relation and provide Repository<User>
  providers: [EncounterService],
  exports: [EncounterService],
})
export class EncounterModule {}
