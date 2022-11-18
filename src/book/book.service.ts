import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from './inferfaces/book.interface';
import { BookInput } from './inputs/book.input';

export class BookService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  async create(createBookDto: BookInput): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
