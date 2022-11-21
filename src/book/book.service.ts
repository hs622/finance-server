import { Inject } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Book } from './interfaces/book.interface';
import { BookInput } from './inputs/book.input';

export class BookService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  async create(bookDto: BookInput): Promise<Book> {
    const createdBook = new this.bookModel(bookDto);
    return createdBook.save();
  }

  async update(bookDto: BookInput): Promise<Book> {
    return this.bookModel.findByIdAndUpdate({ _id: bookDto._id }, bookDto, {
      new: true,
    });
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(bookId: Types.ObjectId): Promise<Book> {
    return this.bookModel.findById(bookId).exec();
  }
}
