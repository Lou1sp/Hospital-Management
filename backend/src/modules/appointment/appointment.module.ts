import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entities';
import { AppointmentService } from './appointment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment])],
  //Register User entity so TypeORM create relation and provide Repository<User>
  providers: [AppointmentService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
