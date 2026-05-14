import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../users/user.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { JwtPayLoad } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDTO) {
    const existingEmail = await this.userService.findByEmail(dto.email);
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.userService.create(
      dto.email,
      dto.user_name,
      hashed,
      dto.phone_num,
      dto.DOB,
    );
    return this.signToken(user.id, user.email, user.role);
  }

  async login(dto: LoginDTO) {
    const user = await this.userService.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Wrong email or password');
    }

    //Compare entered password vs hashed password in DB, bcrypt knows how to hash, no need to hash the dto.password
    const isMatch = await bcrypt.compare(dto.password, user.password_hash);
    if (!isMatch) {
      throw new UnauthorizedException('Wrong email or password');
    }
    return this.signToken(user.id, user.email, user.role);
  }

  private signToken(userId: string, email: string, role: string) {
    const payload: JwtPayLoad = { sub: userId, email, role };
    return {
      access_token: this.jwtService.sign(payload),
      role: role,
      //jwtService.sign() encrypt payload + sign with JWT_SECRET
      //expiresIn was configured in authModule
    };
  }
}
