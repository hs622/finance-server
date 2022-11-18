import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthorType {
  @Field(() => ID)
  id: String;
  @Field()
  readonly firstName: String;
  @Field()
  readonly lastName: String;
  @Field()
  readonly gender: String;
  @Field((type) => Int)
  readonly age: number;
}
