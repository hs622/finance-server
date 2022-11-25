import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    gender: String,
    dob: String,
  },
  { timestamps: true },
);
