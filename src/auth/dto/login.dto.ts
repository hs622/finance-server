import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/dto/user.dto';

@ObjectType()
export class LoginType {
  @Field()
  readonly access_token: String;

  @Field()
  readonly _user: UserType;
}
