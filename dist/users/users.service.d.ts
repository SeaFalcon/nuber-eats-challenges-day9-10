import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly users;
    constructor(users: Repository<User>);
    createUser({ email, password, role, }: CreateUserInput): Promise<CreateUserOutput>;
    login({ email, password }: LoginInput): Promise<LoginOutput>;
}
