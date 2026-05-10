import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from './user.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  user_name!: string;

  @Column()
  password_hash!: string;

  @Column()
  phone_num!: string;

  @Column()
  DOB!: Date;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.PATIENT,
  })
  role!: UserRole; //Column can only receive enum value (which is UserRole)

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;
}
