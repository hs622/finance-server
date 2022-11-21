import { Inject } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Blog } from './interfaces/blog.interface';
import { BlogInput } from './inputs/blog.input';
import { isNull } from 'util';

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

  async findOne(blogId: Types.ObjectId): Promise<Blog | null> {
    const blog = this.blogModel.findById(blogId).exec();
    return blog ? blog : null;
  }

  async remove(blogId: Types.ObjectId): Promise<Blog> {
    return this.blogModel.findByIdAndRemove(blogId);
  }
}
