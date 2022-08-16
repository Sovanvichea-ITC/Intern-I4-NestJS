import { InjectModel } from "@nestjs/mongoose";
import { Model , Types} from "mongoose";
import { PostALL } from './post.interface';
import { PostInput } from './post.input';
import { PostModel, PostModelbyID } from "./post.model";
import {  } from "./post.model";

export class PostService{
    constructor(@InjectModel('Post') private readonly PostModel: Model<PostALL>) {}

    async create(post: PostInput): Promise<PostModel | PostALL>{
        const create = new this.PostModel(post);
        return await create.save();
    }
 
    async getAll(): Promise<PostALL[]>{
        return await this.PostModel.find().exec();
    }

    async getById(id: string): Promise< PostModelbyID | PostALL >{
        const user  = await this.PostModel.findOne({_id: id}).exec();
        //console.log('tag', JSON.parse(JSON.stringify(user)))
        const response:PostModelbyID = new PostModelbyID();
        response._id = id;
        response.error = false;
        response.result =JSON.parse(JSON.stringify(user));

       // console.log(response.result)
        response.success = true;
        response.messsage = "Successfully"
      
        if(!user){
            //throw new Error(`User ${id} not found`);
            response._id = id;
            response.error = true;
            response.result =JSON.parse( JSON.stringify(user) );
            response.success = false;
            response.messsage = "Unsuccessful"
            return response;
        }
        return response;
    }

    async deleteById(id: string): Promise<PostModelbyID | any>{ 
        const user = await this.PostModel.deleteOne({_id: id})
        const response:PostModelbyID = new PostModelbyID();
       
        response.error = false;
        response.success = true;
        response.messsage = "Successfully Deleted";
      
        if(!user.deletedCount){
            response.error = true;
            response.success = false;
            response.messsage = "Unsuccessful Delete"
            return response;
        }
        return response;
    }

    async deleteAll(): Promise<any>{
        //return await this.PostModel.deleteMany();
        return "dd"
    }

    async update(desc:any): Promise<PostModelbyID | any>{
        const user  = await this.PostModel.findOne({_id: desc._id}).exec()
        const response:PostModelbyID = new PostModelbyID();

        if(!user) {
            response._id = desc._id;
            response.error = true;
            //response.result =JSON.parse(JSON.stringify({"_id": desc._id, "description": desc.description, "channel":desc.channel}));
            response.success = false;
            response.messsage = "Not found"
            return response;
        }
       
        const updateuser  = await this.PostModel.updateOne( {_id: desc._id},{description: desc.description},{channel: desc.channel});
     
        response._id = desc._id;
        response.error = false;
        response.result =JSON.parse(JSON.stringify({"_id": desc._id, "description": desc.description, "channel":desc.channel}));
        response.success = true;
        response.messsage = "Successfully"

        if(updateuser?.modifiedCount==0){
            //throw new Error(`User ${id} not found`);
            response._id = desc._id;
            response.error = true;
            response.result =JSON.parse(JSON.stringify({"_id": desc._id, "description": desc.description, "channel":desc.channel}));
            response.success = false;
            response.messsage = "Unsuccessful"
            return response;
        }
        return response;
    }

}