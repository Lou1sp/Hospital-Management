import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entities';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  //Register User entity so TypeORM create relation and provide Repository<User>
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
