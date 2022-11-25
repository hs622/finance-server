import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInput } from 'src/user/inputs/user.input';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginType } from './dto/login.dto';
import { RegisterType } from './dto/register.dto';
import { LoginInput } from './inputs/login.input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authServivce: AuthService,
  ) {}

  @Mutation(() => LoginType)
  async login(@Args('data') credentials: LoginInput) {
    const newUserCreated = await this.authServivce.validate(credentials);
    const token = this.authServivce.login(newUserCreated);
    const registerObj = { ...token, ...newUserCreated };
    return registerObj;
  }

  @Mutation(() => RegisterType)
  async register(@Args('data') user: UserInput) {
    const isEmailExist = this.userService.findUserByEmail(user.email);
    if (isEmailExist) throw new Error('Email already taken!');

    const newUserCreated = await this.userService.createUser(user);
    const token = this.authServivce.login(newUserCreated);
    const registerObj = { ...token, ...newUserCreated };
    return registerObj;
  }
}
