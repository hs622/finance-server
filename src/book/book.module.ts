import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BookProvider } from './book.provider';
import { BooksResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
  imports: [DatabaseModule],
  providers: [BooksResolver, BookService, ...BookProvider],
})
export class BookModule {}
