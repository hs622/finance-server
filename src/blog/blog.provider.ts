import { Mongoose } from 'mongoose';
import { BlogSchema } from './blog.schema';

export const BlogProvider = [
  {
    provide: 'BLOG_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Blog', BlogSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
