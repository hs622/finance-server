import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserProvider } from './user.provider';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, ...UserProvider],
  exports: [UserService],
})
export class UserModule {}
