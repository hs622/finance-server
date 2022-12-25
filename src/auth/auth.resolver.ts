import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.dto';
import { RegisterResponse } from './dto/register.dto';
import { Gql_LocalAuthGrard } from './guards/local-auth.gaurd';
import { LoginInput } from './inputs/login.input';
import { RegisterInput } from './inputs/register.input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authServivce: AuthService,
  ) {}

  @Mutation(() => LoginResponse)
  @UseGuards(Gql_LocalAuthGrard)
  async login(@Args('loginInput') credentials: LoginInput, @Context() context) {
    const token = await this.authServivce.login(context.user);
    return { _user: context.user, ...token };
  }

  @Mutation(() => RegisterResponse)
  async register(@Args('registerInput') user: RegisterInput) {
    const isEmailExist = await this.userService.findUserByEmail(user.email);
    if (isEmailExist) throw new Error('Email already taken!');

    const newUserCreated = await this.userService.createUser(user);
    const token = await this.authServivce.login(newUserCreated);
    return { ...token, _user: newUserCreated };
  }
}
