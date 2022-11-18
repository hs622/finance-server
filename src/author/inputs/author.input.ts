import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AuthorInput {
  @Field()
  readonly firstName: String;
  @Field()
  readonly lastName: String;
  @Field()
  readonly gender: String;
  @Field((type) => Int)
  readonly age: number;
}
