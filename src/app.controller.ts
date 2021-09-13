import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './dto/hello.dto';

@Controller({
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('hello')
  getHello(@Body() helloDto: HelloDto): string {
    console.log(helloDto.foo);
    return this.appService.getHello();
  }
}
