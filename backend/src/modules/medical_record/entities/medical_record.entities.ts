import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Patient } from '../../patient/entities/patient.entities';
import { Encounter } from '../../encounter/entities/encounter.entities';

@Entity('medical_record')
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate?: Date;

  @Column({ nullable: true })
  bloodType?: string;

  @Column({ type: 'text', nullable: true })
  allergies?: string;

  @Column({ type: 'text', nullable: true })
  chronicDiseases?: string;

  @Column({ type: 'json', nullable: true })
  surgicalHistory?: object[];

  @Column({ type: 'text', nullable: true })
  currentMedications?: string;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @OneToOne(() => Patient, (patient) => patient.medicalRecord)
  @JoinColumn({ name: 'patientId' })
  patient!: Patient;

  @Column()
  patientId!: string;

  @OneToMany(() => Encounter, (encounter) => encounter.medicalRecord, {
    cascade: true,
  })
  encounters!: Encounter[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;
}
