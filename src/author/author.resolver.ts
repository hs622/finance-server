import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorType } from './dto/create-author.dto';
import { AuthorInput } from './inputs/author.input';

@Resolver()
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorService) {}

  @Query(() => String)
  async author() {
    return 'hello';
  }

  @Query(() => [AuthorType])
  async authors() {
    return this.authorsService.findAll();
  }

  @Mutation(() => AuthorType)
  async createAuthor(@Args('input') input: AuthorInput) {
    return this.authorsService.create(input);
  }

  //   @ResolveField()
  //   async posts(@Parent() author: Author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
