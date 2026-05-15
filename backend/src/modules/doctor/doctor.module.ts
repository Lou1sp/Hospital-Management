import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entities';
import { DoctorService } from './doctor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
  //Register User entity so TypeORM create relation and provide Repository<User>
  providers: [DoctorService],
  exports: [DoctorService],
})
export class DoctorModule {}
