import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AuthorInput {
  @Field(() => ID, { nullable: true })
  readonly _id?: String;
  @Field()
  readonly first_name: String;
  @Field({ nullable: true })
  readonly last_name: String;
  @Field()
  readonly gender: String;
  @Field((type) => Int)
  readonly age: number;
}
