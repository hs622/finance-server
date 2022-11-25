import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field()
  readonly email: String;
  @Field()
  readonly password: String;
}
