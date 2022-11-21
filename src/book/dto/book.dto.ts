import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookType {
  @Field((type) => ID)
  _id: String;
  @Field()
  readonly title: String;
  @Field()
  readonly genre: String;
  @Field((type) => Int, { nullable: true })
  readonly total_pages: number;

  @Field((type) => ID)
  readonly author_id: String;
}
