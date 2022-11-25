import { InputType } from '@nestjs/graphql';
import { UserInput } from 'src/user/inputs/user.input';

@InputType()
export class RegisterInput extends UserInput {}
