import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginType {
  @Field()
  readonly access_token: string;
}
