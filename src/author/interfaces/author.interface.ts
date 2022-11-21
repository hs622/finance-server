import { Document } from 'mongoose';

export interface Author extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly gender: string;
  readonly age: number;
}
