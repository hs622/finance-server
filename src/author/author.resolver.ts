import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { AuthorService } from './author.service';
import { AuthorResponse } from './dto/author.dto';
import { AuthorInput } from './inputs/author.input';

@Resolver()
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorService) {}

  @Query(() => AuthorResponse)
  async author(
    @Args({ name: '_id', type: () => String }) authorId: Types.ObjectId,
  ) {
    return this.authorsService.findOne(authorId);
  }

  @Query(() => [AuthorResponse])
  async authors() {
    return this.authorsService.findAll();
  }

  @Mutation(() => AuthorResponse)
  async createAuthor(@Args('data') input: AuthorInput) {
    return this.authorsService.create(input);
  }

  @Mutation(() => AuthorResponse)
  async updateAuthor(@Args('data') input: AuthorInput) {
    return this.authorsService.update(input);
  }

  @Mutation(() => AuthorResponse)
  async removeAuthor(
    @Args({ name: '_id', type: () => String }) authorId: Types.ObjectId,
  ) {
    return this.authorsService.remove(authorId);
  }
}
