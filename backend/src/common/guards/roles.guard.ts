import {
  Injectable,
  CanActivate, //Guard interface
  ExecutionContext, //Allow access to request/response
} from '@nestjs/common';
import { Reflector } from '@nestjs/core'; //Used to read metadata from decorator (exp: @Roles('admin'))
import { UserRole } from '../../modules/users/entities/user.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  //This class is a Guard
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<UserRole[]>(
      'roles',
      context.getHandler(),
    ); //It reads @Roles('role') then turns into requiredRoles = ['role']

    if (!requiredRoles) return true;

    const user = context.switchToHttp().getRequest<any>().user as {
      role: UserRole;
    };

    return requiredRoles.includes(user.role); //Compare the role required with the user role
  }
}
