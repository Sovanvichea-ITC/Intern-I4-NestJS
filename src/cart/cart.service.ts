import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart} from './interfcaes/cart.interface';
import { CartInput } from './inputs/cart.input';

@Injectable()
export class CartsService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  async create(createCatDto: CartInput): Promise<Cart> {
    const createdCat = new this.cartModel(createCatDto);
    //console.log('Hello', createdCat)
    return await createdCat.save();
  }

  async findAll(): Promise<Cart[]> {
    return await this.cartModel.find().exec();
  }
}
