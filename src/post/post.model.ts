import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class PostModel{
    @Field(()=> ID)
    id: string;
    @Field()
    description: string;
    @Field()
    channel: string;
}


@ObjectType()
export class Result1{
    @Field()
    _id: string;
    @Field()
    description: string;
    @Field()
    channel: string;
}



@ObjectType()
export class PostModelbyID{
    @Field(()=> ID ,{nullable:true})
    _id: string;
    @Field({nullable:true})
    result?:Result1;
    @Field({nullable:true})
    description?: string;
    @Field({nullable:true})
    channel?: string;
    @Field({nullable:true})
    success?: boolean;
    @Field({nullable:true})
    error?: boolean;
    @Field({nullable:true})
    messsage?: string;
    
}
