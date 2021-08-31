import { Field } from '@nestjs/graphql';
import { IsEnum, IsString } from 'class-validator';
import { CoreEntity } from 'src/podcast/entities/core.entity';
import { Column } from 'typeorm';

enum UserRole {
  Host,
  Listener,
}

export class User extends CoreEntity {
  @Column()
  @Field(() => String)
  @IsString()
  email: string;

  @Column()
  @Field(() => String)
  @IsString()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole;
}
