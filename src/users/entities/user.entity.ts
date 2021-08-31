import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/podcast/entities/core.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

enum UserRole {
  Host,
  Listener,
}

registerEnumType(UserRole, { name: 'UserRole' });

@Entity()
@InputType()
export class User extends CoreEntity {
  @Column()
  @Field(() => String)
  @IsEmail()
  email: string;

  @Column()
  @Field(() => String)
  @IsString()
  @Length(8)
  password: string;

  @Column()
  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (e) {
        console.log(e);
        throw new InternalServerErrorException();
      }
    }
  }
}
