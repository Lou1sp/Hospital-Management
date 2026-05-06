import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
//All route start with 'auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  //POST /auth/register
  register(@Body() dto: RegisterDTO) {
    // @Body() auto parse request into DTO
    // ValidationPipe run first, if error return 404
    return this.authService.register(dto);
  }

  @Post('login')
  // POST /auth/login
  login(@Body() dto: LoginDTO) {
    return this.authService.login(dto);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  // @UseGuards(AuthGuard('jwt')) — ONLY access if have valid JWT - or else return 401
  getMe(@Req() req: Request) {
    return req.user;
  }
}
