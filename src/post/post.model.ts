import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class PostModel{
    @Field(()=> ID)
    id: string;
    @Field()
    readonly description: string;
    @Field()
    readonly channel: string;
}

export class PostModelbyID{
    @Field(()=> ID)
    _id: string;
}