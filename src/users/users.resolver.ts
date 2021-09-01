import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UserProfileOutput } from './dtos/user-profile.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateUserOutput)
  createUser(
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => LoginOutput)
  login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    return this.usersService.login(loginInput);
  }
  @UseGuards(AuthGuard)
  @Query(() => UserProfileOutput)
  getUserProfile(@Args('id') userId: number): Promise<UserProfileOutput> {
    return this.usersService.getUserProfile(userId);
  }

  @UseGuards(AuthGuard)
  @Query(() => User)
  me(@AuthUser() authUser): User {
    return authUser;
  }

  @UseGuards(AuthGuard)
  @Mutation(() => EditProfileOutput)
  editUserProfile(
    @AuthUser() authUser,
    @Args('input') editProfileInput: EditProfileInput,
  ): Promise<EditProfileOutput> {
    return this.usersService.editUserProfile(authUser.id, editProfileInput);
  }
}
