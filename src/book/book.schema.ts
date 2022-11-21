import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  total_pages: Number,
  author_id: mongoose.Types.ObjectId,
});
