import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { HttpExceptionFilter } from './pipe/exception.filter';
import { IndexController } from './index/index/index.controller';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  controllers: [IndexController],
})
export class AppModule {
  constructor(

  ) { }
}
