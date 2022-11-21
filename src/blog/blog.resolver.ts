import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogInput } from './inputs/blog.input';
import { BlogService } from './blog.service';
import { BlogType } from './dto/blog.dto';
import { Types } from 'mongoose';

@Resolver()
export class BooksResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => BlogType || null)
  async blog(
    @Args({ name: '_id', type: () => String }) blogId: Types.ObjectId,
  ) {
    return this.blogService.findOne(blogId);
  }

  @Query(() => [BlogType])
  async blogs() {
    return this.blogService.findAll();
  }

  @Mutation(() => BlogType)
  async createBlog(@Args('data') input: BlogInput) {
    return this.blogService.create(input);
  }

  @Mutation(() => BlogType)
  async updateBlog(@Args('data') input: BlogInput) {
    return this.blogService.update(input);
  }

  @Mutation(() => BlogType)
  async removeBlog(
    @Args({ name: '_id', type: () => String }) blogId: Types.ObjectId,
  ) {
    return this.blogService.remove(blogId);
  }
}
