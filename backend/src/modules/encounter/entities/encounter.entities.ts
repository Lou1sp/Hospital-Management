import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Doctor } from '../../doctor/entities/doctor.entities';
import { Patient } from '../../patient/entities/patient.entities';
import { Appointment } from '../../appointment/entities/appointment.entities';
import { EncounterStatus, EncounterType } from './encounter.enum';
import { MedicalRecord } from '../../medical_record/entities/medical_record.entities';

@Entity('encounters')
export class Encounter {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => Appointment, { nullable: true })
  @JoinColumn({ name: 'appointmentID' })
  appointment?: Appointment;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments) //each doctor map to some appointments
  @JoinColumn({ name: 'doctor_id' })
  doctor!: Doctor;

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  @JoinColumn({ name: 'patient_id' })
  patient!: Patient;

  @Column({
    type: 'enum',
    enum: EncounterStatus,
    default: EncounterStatus.WAITING,
  })
  status!: string;

  @Column({
    type: 'enum',
    enum: EncounterType,
  })
  encounterType!: string;

  @ManyToOne(() => MedicalRecord, (mr) => mr.encounters)
  @JoinColumn({ name: 'medicalRecordId' })
  medicalRecord!: MedicalRecord;

  @Column({ type: 'text', nullable: true })
  chiefComplaint!: string;

  @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.encounter)
  diagnoses!: Diagnosis[];

  @OneToMany(() => Prescription, (prescription) => prescription.encounter)
  prescriptions!: Prescription[];

  @OneToMany(() => LabResult, (labResult) => labResult.encounter)
  labResults!: LabResult[];

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  startedAt!: Date;

  @Column({ type: 'timestamptz' })
  endAt!: Date;
}
