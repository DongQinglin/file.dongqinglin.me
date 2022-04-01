import { Dictionary } from 'src/database/entity/dictionary.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dictionary])
  ],
  controllers: [DictionaryController],

  providers: [
    DictionaryService
  ]
})
export class DictionaryModule { }
