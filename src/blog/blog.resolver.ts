import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogInput } from './inputs/blog.input';
import { BlogService } from './blog.service';
import { BlogResponse } from './dto/blog.dto';
import { Types } from 'mongoose';

@Resolver()
export class BooksResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => BlogResponse)
  async blog(
    @Args({ name: '_id', type: () => String }) blogId: Types.ObjectId,
  ) {
    return this.blogService.findOne(blogId);
  }

  @Query(() => [BlogResponse])
  async blogs() {
    return this.blogService.findAll();
  }

  @Mutation(() => BlogResponse)
  async createBlog(@Args('data') input: BlogInput) {
    return this.blogService.create(input);
  }

  @Mutation(() => BlogResponse)
  async updateBlog(@Args('data') input: BlogInput) {
    return this.blogService.update(input);
  }

  @Mutation(() => BlogResponse)
  async removeBlog(
    @Args({ name: '_id', type: () => String }) blogId: Types.ObjectId,
  ) {
    return this.blogService.remove(blogId);
  }
}
