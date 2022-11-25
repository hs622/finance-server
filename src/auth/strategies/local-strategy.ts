import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class LocalStartegy extends PassportStrategy(Strategy) {}
