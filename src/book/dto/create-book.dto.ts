import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookType {
  @Field(() => ID)
  readonly id: String;
  @Field()
  readonly title: String;
  @Field(() => Int)
  readonly total_pages: number;
  @Field()
  readonly genre: String;

  @Field()
  readonly author_id: String;
}
