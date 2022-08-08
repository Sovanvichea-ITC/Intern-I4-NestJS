import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CartInput {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}