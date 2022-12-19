import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
// import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthorModule } from './author/author.module';
import { BookModule } from './blog/blog.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // definitions: {
      //   path: join(process.cwd(), 'schema.ts'),
      // },
    }),
    AuthModule,
    UserModule,
    BookModule,
    AuthorModule,
  ],
  // controllers: [AppController],
  // providers: [AppService,],
})
export class AppModule {}
