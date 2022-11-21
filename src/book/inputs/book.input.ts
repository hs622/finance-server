import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class BookInput {
  @Field(() => ID, { nullable: true })
  readonly _id?: String;
  @Field()
  readonly title: String;
  @Field()
  readonly genre: String;
  @Field((type) => Int)
  readonly total_pages: number;

  @Field((type) => ID)
  readonly author_id: String;
}
