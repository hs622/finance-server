import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { jwtSecret } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ingoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  // validate(access_token: string): Promise<User> {
  //   const payload = this.jwtService.verify(access_token, {
  //     secret: jwtSecret,
  //   });

  //   console.log({ payload });

  //   const user = this.userService.findUserByEmail(payload.email);
  //   return user;
  // }
}
