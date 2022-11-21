import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  tagline: String,
  genre: String,
  description: String,
  author_id: mongoose.Types.ObjectId,
  publish: Boolean,
});
