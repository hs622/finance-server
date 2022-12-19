import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class UserResponse {
  @Field(() => ID)
  readonly _id: String;
  @Field()
  readonly first_name: String;

  @Field()
  readonly email: String;

  @Field({ nullable: true })
  readonly last_name?: String;
  @Field({ nullable: true })
  readonly password?: String;

  @Field({ nullable: true })
  readonly gender?: String;
  @Field({ nullable: true })
  readonly dob?: String;
}
