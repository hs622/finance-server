import { Inject } from '@nestjs/common';
import { Error, Model, Types } from 'mongoose';
import { Blog } from './interfaces/blog.interface';
import { BlogInput } from './inputs/blog.input';

export class BlogService {
  constructor(
    @Inject('BLOG_MODEL')
    private blogModel: Model<Blog>,
  ) {}

  async create(blogDto: BlogInput): Promise<Blog> {
    const createdBlog = new this.blogModel(blogDto);
    return createdBlog.save();
  }

  async update(blogDto: BlogInput): Promise<Blog> {
    return this.blogModel.findByIdAndUpdate({ _id: blogDto._id }, blogDto, {
      new: true,
    });
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async findOne(blogId: Types.ObjectId): Promise<Blog> {
    return this.blogModel.findById(blogId).exec();
  }

  async remove(blogId: Types.ObjectId): Promise<Blog> {
    return this.blogModel.findByIdAndRemove(blogId);
  }
}
