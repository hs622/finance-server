import { Injectable } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class jwtGaurd extends AuthGuard('jwt') {
  constructor() {
    super();
  }

  
}
