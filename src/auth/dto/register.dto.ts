import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/dto/user.dto';

@ObjectType()
export class RegisterType {
  @Field()
  readonly access_token: String;

  @Field()
  readonly _user: UserType;
}
