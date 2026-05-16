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
import { Encounter } from '../../encounter/entities/encounter.entities';
import { MedicalRecord } from '../../medical_record/entities/medical_record.entities';

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

  @OneToMany(() => Encounter, (a) => a.patient)
  encounters!: Encounter[];

  @OneToOne(() => MedicalRecord, (mr) => mr.patient, {
    cascade: true, // Tạo patient tự động tạo medical record
  })
  medicalRecord!: MedicalRecord;
}
