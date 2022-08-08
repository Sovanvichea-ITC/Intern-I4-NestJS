import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartResolver } from './cart.resolver';
import { CartSchema } from './cart.schema';
import { CartsService } from './cart.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Cart", schema: CartSchema }])],
  providers: [CartResolver,CartsService],
})
export class CartModule {}
