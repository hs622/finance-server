import { ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class Gql_JWTAuthGaurd extends AuthGuard() {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    console.log(ctx.getClass());
    console.log(ctx.getInfo());

    return request;
  }
}
