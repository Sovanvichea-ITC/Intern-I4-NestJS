import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [  
    CartModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile:'schema.gql',
      driver:ApolloDriver
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/nest'),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
