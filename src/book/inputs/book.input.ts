import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class BookInput {
  @Field()
  readonly title: String;
  @Field((type) => Int)
  readonly total_pages: number;
  @Field()
  readonly genre: String;
  // @Field(() => Date)
  // readonly release_date: Date;

  @Field((type) => ID)
  readonly author_id: String;
}
