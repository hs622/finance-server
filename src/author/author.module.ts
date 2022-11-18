import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthorProviders } from './author.providers';
import { AuthorsResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports: [DatabaseModule],
  providers: [AuthorsResolver, AuthorService, ...AuthorProviders],
})
export class AuthorModule {}
