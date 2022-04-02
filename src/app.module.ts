import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { IndexController } from './file/index.controller';
import { HttpExceptionFilter } from './pipe/exception.filter';

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
  constructor() { }
}
