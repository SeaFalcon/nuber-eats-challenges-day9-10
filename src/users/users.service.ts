import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async createUser({
    email,
    password,
    role,
  }: CreateUserInput): Promise<CreateUserOutput> {
    try {
      const user = await this.users.create({ email, password, role });
      this.users.save(user);

      return {
        ok: true,
      };
    } catch (e) {
      console.log(e);

      return {
        ok: false,
        error: "Couldn't create user.",
      };
    }
  }
}
