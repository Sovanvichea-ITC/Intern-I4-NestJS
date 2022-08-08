
import { Resolver ,Query, Mutation, Args} from "@nestjs/graphql";
import { CartsService } from "./cart.service";
import { CartType } from "./dto/create-cart.dto";
import { CartInput } from "./inputs/cart.input";

@Resolver()

export class CartResolver{
    constructor(
        private readonly cartsService: CartsService,
    ){}

    @Query(()=> String)
    async hello(){
        return 'hello';
    }

    @Query(()=> [CartType])
    async carts(){
        return this.cartsService.findAll()
    }

    @Mutation(()=> CartType)
    async createCarts(@Args('input') input: CartInput){
        return this.cartsService.create(input);
    }
}