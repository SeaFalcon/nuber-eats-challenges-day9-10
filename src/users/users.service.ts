import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
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

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    const user = await this.users.findOne(
      { email },
      { select: ['id', 'password'] },
    );

    const passwordCorrect = await bcrypt.compare(password, user.password);

    console.log('passwordCorrect', passwordCorrect);

    const token = jwt.sign({ id: user.id }, 'secret-key');

    return {
      ok: true,
      token,
    };
  }
}
