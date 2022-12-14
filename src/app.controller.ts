import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('cart')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/index/h123')
  getHello11(): string {
    return this.appService.getHello();
    
  }
}


