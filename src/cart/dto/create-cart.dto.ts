
// DTO : data transfer Object 

import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CartType {
    @Field(()=> ID)
    id: string;
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}