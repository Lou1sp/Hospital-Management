import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';
import { UserRole } from '../../users/entities/user.enum';

export class RegisterDTO {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(18)
  password!: string;

  @IsEnum(UserRole)
  role!: UserRole;
}
