import { CoreEntity } from 'src/podcast/entities/core.entity';
declare enum UserRole {
    Host = 0,
    Listener = 1
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: UserRole;
    hashPassword(): Promise<void>;
}
export {};
