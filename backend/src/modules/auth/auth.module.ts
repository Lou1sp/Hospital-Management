import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
@Module({
  //imports used to inject other Moddule inside here
  //imports a list of Module that AuthModule need to use
  imports: [
    UserModule, //Allow us use UserSevice because UserModule has export: [UserService]
    PassportModule, //NestJS activate "strategy" of Passport -> JWT strategy can work
    //If we dont import PassportModule, @UseGuards not working
    JwtModule.registerAsync({
      //RegisterAsync to read variable (from .env)
      imports: [ConfigModule], //To read .env
      inject: [ConfigService], //To use useFactory
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'), //Get secret from .env
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],

  providers: [AuthService, JwtStrategy], //Register all the service inside
  controllers: [AuthController], //NestJS will map routes like /auth/register, /auth/login to here
})
export class AuthModule {}
