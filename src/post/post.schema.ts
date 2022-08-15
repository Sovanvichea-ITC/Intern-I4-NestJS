import * as mongoose from 'mongoose';

export const PostSchema =  new mongoose.Schema({
    description : String,
    channel: {type: String, required: true},
});