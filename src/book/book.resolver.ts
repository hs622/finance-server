import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookInput } from './inputs/book.input';
import { BookService } from './book.service';
import { BookType } from './dto/book.dto';
import { Types } from 'mongoose';

@Resolver()
export class BooksResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => BookType)
  async book(
    @Args({ name: '_id', type: () => String }) bookId: Types.ObjectId,
  ) {
    return this.bookService.findOne(bookId);
  }

  @Query(() => [BookType])
  async books() {
    return this.bookService.findAll();
  }

  @Mutation(() => BookType)
  async createBook(@Args('data') input: BookInput) {
    return this.bookService.create(input);
  }

  @Mutation(() => BookType)
  async updateAuthor(@Args('data') input: BookInput) {
    return this.bookService.update(input);
  }
}
