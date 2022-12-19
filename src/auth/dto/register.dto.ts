import { Field, ObjectType } from '@nestjs/graphql';
import { UserResponse } from 'src/user/dto/user.dto';

@ObjectType()
export class RegisterResponse {
  @Field()
  readonly access_token: String;

  @Field()
  readonly _user: UserResponse;
}
