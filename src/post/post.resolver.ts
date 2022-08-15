import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostModel, PostModelbyID } from './post.model'
import { PostInput, PostInputByID, PostInputUpdateDes } from './post.input';
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
        const user = await this.PostService.getById(findbyid._id)
        return user;
    }

    @Mutation(() => PostModelbyID)
    async delbyID(@Args('deletebyid') deleteById: PostInputByID){
        return await this.PostService.deleteById(deleteById._id)
    }

   
    @Mutation(() => PostModelbyID)
    async updPost(@Args('updatePost') desc: PostInputUpdateDes) {
        //console.log(desc);
        return await this.PostService.update(desc);
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
//     getOne(getById:{ _id:"62fa00010899ef963da36dc0"}){
//      result{
//       _id,
//      description,
//      channel,
//      },
//      success,
//      error,
//      messsage
//    }
//    }