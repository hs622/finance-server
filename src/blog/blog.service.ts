import { Inject } from '@nestjs/common';
import { Error, Model, Types } from 'mongoose';
import { Blog } from './interfaces/blog.interface';
import { BlogInput } from './inputs/blog.input';

export class BlogService {
  constructor(
    @Inject('BLOG_MODEL')
    private blogModel: Model<Blog>,
  ) {}

  async create(blog: BlogInput): Promise<Blog> {
    const createdBlog = new this.blogModel(blog);
    return createdBlog.save();
  }

  async update(blog: BlogInput): Promise<Blog> {
    return this.blogModel.findByIdAndUpdate({ _id: blog._id }, blog, {
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
