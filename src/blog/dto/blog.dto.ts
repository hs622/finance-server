import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BlogResponse {
  @Field((type) => ID)
  _id: String;
  @Field()
  readonly title: String;
  @Field({ nullable: true })
  readonly tagline: String;
  @Field()
  readonly genre: String;
  @Field()
  readonly description: String;

  @Field((type) => ID)
  readonly author_id: String;

  @Field()
  readonly publish: Boolean;
  @Field()
  readonly createdAt: String;
  @Field()
  readonly updatedAt: String;
}
