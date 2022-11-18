import { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: String;
  readonly total_pages: number;
  readonly genre: String;
  readonly author_id: String;
}
