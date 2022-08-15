import { InjectModel } from "@nestjs/mongoose";
import { Model , Types} from "mongoose";
import { PostALL } from './post.interface';
import { PostInput } from './post.input';
import { PostModelbyID } from "./post.model";
import { response } from "express";

export class PostService{
    constructor(@InjectModel('Post') private readonly PostModel: Model<PostALL>) {}

    async create(post: PostInput): Promise<PostALL>{
        const create = new this.PostModel(post);
        return await create.save();
    }
 
    async getAll(): Promise<PostALL[]>{
        return await this.PostModel.find().exec();
    }

    async getById(id: string): Promise< PostModelbyID | PostALL >{
        console.log(id);
        const user  = await this.PostModel.findOne({_id: id}).exec();
        console.log(user.channel);
        const r:PostModelbyID = new PostModelbyID();
      
        r._id = id;
        r.error = false;
        r.result =JSON.parse( JSON.stringify(user) );
        r.success = true;
        r.messsage = "Successfully"
       // r.result =  JSON.stringify(user);
        //r.channel = user.channel;

        if(!user){
            throw new Error(`User ${id} not found`);

        }
        return r;
    }

    async deleteById(id: string): Promise<any>{ 
        const user = await this.PostModel.remove({_id: id})
        console.log('tag', user);
        return "sucessfully"
    }

}