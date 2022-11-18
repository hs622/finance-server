import { Mongoose } from 'mongoose';
import { BookSchema } from './book.schema';

export const BookProvider = [
  {
    provide: 'BOOK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Book', BookSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
