import { Mongoose } from 'mongoose';
import { AuthorSchema } from './author.schema';

export const AuthorProviders = [
  {
    provide: 'AUTHOR_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Author', AuthorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
