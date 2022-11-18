import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Author } from './interfaces/author.interface';
import { AuthorInput } from './inputs/author.input';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_MODEL')
    private authorModel: Model<Author>,
  ) {}

  async create(createAuhtorDto: AuthorInput): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuhtorDto);
    return createdAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  // async findOne(): Promise<Author[]> {
  //   return this.authorModel.findById().exec();
  // }
}
