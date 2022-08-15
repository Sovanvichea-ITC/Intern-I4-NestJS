import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class PostInput{
   // @Field({nullable: true})
    @Field()
    readonly description: string;
    @Field()
    readonly channel: string;
}


@InputType()
export class PostInputByID{
    @Field()
    readonly _id: string;
}
