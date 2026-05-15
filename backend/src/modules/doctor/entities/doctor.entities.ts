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

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userID' })
  user!: User; //Point to a user with userID xxx

  @Column()
  specialization!: string;

  @Column()
  licenseNumber!: string;

  @OneToMany(() => Appointment, (a) => a.doctor)
  appointments!: Appointment[];
}
