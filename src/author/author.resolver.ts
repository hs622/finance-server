import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { AuthorService } from './author.service';
import { AuthorType } from './dto/author.dto';
import { AuthorInput } from './inputs/author.input';

@Resolver()
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorService) {}

  @Query(() => AuthorType)
  async author(
    @Args({ name: '_id', type: () => String }) authorId: Types.ObjectId,
  ) {
    return this.authorsService.findOne(authorId);
  }

  @Query(() => [AuthorType])
  async authors() {
    return this.authorsService.findAll();
  }

  @Mutation(() => AuthorType)
  async createAuthor(@Args('data') input: AuthorInput) {
    return this.authorsService.create(input);
  }

  @Mutation(() => AuthorType)
  async updateAuthor(@Args('data') input: AuthorInput) {
    return this.authorsService.update(input);
  }

  @Mutation(() => AuthorType)
  async removeAuthor(
    @Args({ name: '_id', type: () => String }) authorId: Types.ObjectId,
  ) {
    return this.authorsService.remove(authorId);
  }
}
