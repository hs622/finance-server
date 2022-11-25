import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => ID, { nullable: true })
  readonly _id?: String;
  @Field()
  readonly first_name: String;
  @Field({ nullable: true })
  readonly last_name: String;
  @Field()
  readonly email: String;
  @Field()
  readonly password: String;

  @Field({ nullable: true })
  readonly gender: String;
  @Field({ nullable: true })
  readonly dob: String;
}
