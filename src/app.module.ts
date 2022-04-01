import { Connection } from 'typeorm';

import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { AppMysqlModule } from './database/app.mysql.module';
import { AppMailModule } from './email/app.mail.module';
import { DictionaryModule } from './index/dictionary/dictionary.module';
import { HttpExceptionFilter } from './pipe/exception.filter';

@Module({
  imports: [
    AppMysqlModule,
    DictionaryModule,
    AppMailModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {
  constructor(
    private readonly connection: Connection
  ) { }
}
