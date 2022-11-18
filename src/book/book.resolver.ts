import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookInput } from './inputs/book.input';
import { BookService } from './book.service';
import { BookType } from './dto/create-book.dto';

@Resolver()
export class BooksResolver {
  constructor(private readonly bookService: BookService) {}

  // @Query(() => String)
  // async book() {
  //   return 'book';
  // }

  // @Query(() => [BookType])
  // async books() {
  //   return this.bookService.findAll();
  // }

  @Mutation(() => BookType)
  async createBook(@Args('input') input: BookInput) {
    return this.bookService.create(input);
  }

  // @Mutation(() => AuthorType)
  // async createAuthor(@Args('input') input: AuthorInput) {
  //   return this.authorsService.create(input);
  // }
}
