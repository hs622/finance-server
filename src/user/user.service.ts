import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserInput } from './inputs/user.input';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) {}

  async findUserByEmail(email: String): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async createUser(user: UserInput): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
