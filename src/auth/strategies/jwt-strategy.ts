import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class JwtStartegy extends PassportStrategy(Strategy) {}
