import { InjectModel } from "@nestjs/mongoose";
import { Model , Types} from "mongoose";
import { PostALL } from './post.interface';
import { PostInput, PostInputByID } from './post.input';

export class PostService{
    constructor(@InjectModel('Post') private readonly PostModel: Model<PostALL>) {}

    async create(post: PostInput): Promise<PostALL>{
        const create = new this.PostModel(post);
        return await create.save();
    }
 
    async getAll(): Promise<PostALL[]>{
        return await this.PostModel.find().exec();
    }

    async getById(id: string): Promise<any>{
        const user = await this.PostModel.findOne({_id: id}).exec();
        if (!user) {
            return false;
        }
       return user;
    }

    async deleteById(id: string): Promise<any>{ 
        const user = await this.PostModel.remove({_id: id})
        console.log('tag', user);
        return "sucessfully"
    }

}