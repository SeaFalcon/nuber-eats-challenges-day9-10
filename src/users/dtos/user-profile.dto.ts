import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/podcast/dtos/output.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class UserProfileOutput extends CoreOutput {
  @Field(() => User)
  user?: User;
}
