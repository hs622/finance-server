import mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  total_page: String,
  age: Number,
  gender: String,
});
