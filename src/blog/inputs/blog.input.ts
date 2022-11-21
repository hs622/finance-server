import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class BlogInput {
  @Field(() => ID, { nullable: true })
  readonly _id?: String;
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
}
