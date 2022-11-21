import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BlogProvider } from './blog.provider';
import { BooksResolver } from './blog.resolver';
import { BlogService } from './blog.service';

@Module({
  imports: [DatabaseModule],
  providers: [BooksResolver, BlogService, ...BlogProvider],
})
export class BookModule {}
