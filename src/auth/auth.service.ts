import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { jwtSecret, privateKey } from './constants';
import { LoginInput } from './inputs/login.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(credentials: LoginInput): Promise<User> {
    const currentUser: User = await this.userService.findUserByEmail(
      credentials.email,
    );
    return currentUser;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = {
      email: user.email,
      sub: user._id,
    };

    const options = {
      secret: jwtSecret,
      privateKey: privateKey,
    };

    return {
      access_token: this.jwtService.sign(payload, options),
    };
  }

  async verify(access_token: string): Promise<User> {
    const payload = this.jwtService.verify(access_token, {
      secret: jwtSecret,
    });

    const user = this.userService.findUserByEmail(payload.email);
    return user;
  }

  async register(user: User) {}
  async refresh(access_token: string) {}
}
