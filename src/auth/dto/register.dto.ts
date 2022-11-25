import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/dto/user.dto';

@ObjectType()
export class RegisterType extends UserType {
  @Field()
  readonly access_token: String;
}
