import mongoose, { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: String;
  readonly genre: String;
  readonly total_pages: number;
  readonly author_id: mongoose.Types.ObjectId;
}
