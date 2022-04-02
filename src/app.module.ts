import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { FileModule } from './file/file.module';
import { HttpExceptionFilter } from './pipe/exception.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  imports: [FileModule],
})
export class AppModule {
  constructor() { }
}
