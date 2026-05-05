import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entities';

@Injectable() //Help NestJS inject this class into another constructor
export class UserService {
  constructor(
    @InjectRepository(User) //NestJS automatically inject TypeORM Repo of User entity
    private readonly userRepo: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { email } });
  }

  async create(email: string, password_hash: string): Promise<User> {
    const user = this.userRepo.create({ email, password_hash });
    return this.userRepo.save(user);
  }
}
