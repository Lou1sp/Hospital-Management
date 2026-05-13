import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../modules/users/entities/user.enum';

//Customed decorator, so it can read @Role(...)
export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
