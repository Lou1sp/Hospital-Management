import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { User } from '../../users/entities/user.entities';
import { Appointment } from '../../appointment/entities/appointment.entities';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userID' })
  user!: User;

  @Column({ nullable: true })
  gender!: string;

  @Column({ nullable: true })
  address!: string;

  @Column({ nullable: true })
  insuranceID!: string;

  @OneToMany(() => Appointment, (a) => a.patient)
  appointments!: Appointment[];
}
