import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entities';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  //Register User entity so TypeORM create relation and provide Repository<User>
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
