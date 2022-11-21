import mongoose, { Document } from 'mongoose';

export interface Blog extends Document {
  readonly title: String;
  readonly tagline: String;
  readonly genre: String;
  readonly description: String;
  readonly author_id: mongoose.Types.ObjectId;
  readonly publish: Boolean;
}
