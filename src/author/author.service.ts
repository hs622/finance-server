import { Model, Types } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Author } from './interfaces/author.interface';
import { AuthorInput } from './inputs/author.input';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_MODEL')
    private authorModel: Model<Author>,
  ) {}

  async create(auhtor: AuthorInput): Promise<Author> {
    const createdAuthor = new this.authorModel(auhtor);
    return createdAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async findOne(authorId: Types.ObjectId): Promise<Author> {
    return this.authorModel.findById(authorId).exec();
  }

  async update(auhtor: AuthorInput): Promise<Author> {
    return this.authorModel.findByIdAndUpdate({ _id: auhtor._id }, auhtor, {
      new: true,
    });
  }

  async remove(authorId: Types.ObjectId): Promise<Author> {
    return this.authorModel.findByIdAndRemove(authorId);
  }
}
