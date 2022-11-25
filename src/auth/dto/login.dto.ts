import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/dto/user.dto';

@ObjectType()
export class LoginType extends UserType {
  @Field()
  readonly access_token: String;
}
