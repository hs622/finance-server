import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInput } from 'src/user/inputs/user.input';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginType } from './dto/login.dto';
import { RegisterType } from './dto/register.dto';
import { LoginInput } from './inputs/login.input';
import { RegisterInput } from './inputs/register.input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authServivce: AuthService,
  ) {}

  @Mutation(() => LoginType)
  async login(@Args('data') credentials: LoginInput) {
    try {
      const current_user = this.authServivce.validate(credentials);
    } catch (error) {
      console.log(error);
    }

    // if ( null === )
    //  return this.authServivce.login();
    return 'login';
  }

  @Mutation(() => RegisterType)
  async register(@Args('data') user: UserInput) {
    console.log(user);
    const register = {
      user,
      access_token: 'asdasdasd',
    };

    return register;
  }
}
