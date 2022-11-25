import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthorType {
  @Field((type) => ID)
  _id: String;
  @Field()
  readonly first_name: String;
  @Field()
  readonly last_name: String;
  @Field()
  readonly gender: String;
  @Field((type) => Int, { nullable: true })
  readonly age: number;
  // @Field()
  // readonly

  @Field()
  readonly createdAt: String;
  @Field()
  readonly updatedAt: String;
}
