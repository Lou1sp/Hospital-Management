import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../users/user.service';

export interface JwtPayLoad {
  sub: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //Read token from header: "Authorization: Bearer <token>"

      ignoreExpiration: false,
      //Deny expired token

      secretOrKey: process.env.JWT_SECRET!,
    });
  }

  async validate(payload: JwtPayLoad) {
    //This function will be called automatically after Passport validate token
    //Payload = data decoded from token
    const user = await this.userService.findByEmail(payload.email);
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
