import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostModel, PostModelbyID } from './post.model'
import { PostInput, PostInputByID } from './post.input';
import {PostService} from './post.service'


@Resolver()
export class PostResolver{
    constructor(private readonly PostService: PostService){}
    @Query(() => [PostModel])
    async getPost(){
        return this.PostService.getAll();
    }
    
    @Mutation(() => PostModel)
    async createPost(@Args('crepost') createpost: PostInput ){
        return this.PostService.create(createpost);
    }

    @Query(() => PostModelbyID, {nullable:true})
    async getOne(@Args('getById') findbyid: PostInputByID){
        console.log("ddd",findbyid)
        const user = await this.PostService.getById(findbyid._id)
        console.log(user)
        return user;
    }

    @Mutation(() => PostModel)
    async delbyID(@Args('deletebyid') deleteById: PostInputByID){
        console.log(deleteById);
        return await this.PostService.deleteById(deleteById._id)
    }
}


//test in graphql 
// #input

// mutation{
//     createP(createpost:{
//       description:"ddd",
//       channel: "dd"
//     })
//     {
//       description,
//       channel
//     }
//   }


// # getAll

// query{
//     getPost{
//       id,
//       description,
//       channel
//     }
//   }


// # getbyid


// query{
//     getOne(getById:{ _id:"62fa031ccd1170a26610f427"}){
//      description,
//      channel
//    }
     
//    }
   