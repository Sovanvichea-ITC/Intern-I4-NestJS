// import * as mongoose from 'mongoose';

// export const PostSchema =  new mongoose.Schema({
//     description : String,
//     channel: {
//         type: String, 
//         required: true
//     },
//     createdAt: Date
    
// });

import { ObjectType, Field } from '@nestjs/graphql'
import { Schema as MongooseSchema } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
@Schema({ timestamps: true })
@ObjectType()
export class Post {
  _id: MongooseSchema.Types.ObjectId
  @Prop()
  @Field(() => String, { description: 'Post description ' })
  description: String
  @Prop()
  @Field(() => String, { description: 'Post channel ' })
  channel:String
  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date
  @Prop()
  @Field(() => Date, { description: 'Created At' })
  updatedAt?: Date
}

export const PostSchema = SchemaFactory.createForClass(Post)