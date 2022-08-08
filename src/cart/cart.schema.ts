import * as mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
