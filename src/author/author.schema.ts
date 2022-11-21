import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    age: Number,
    gender: String,
  },
  { timestamps: true },
);
