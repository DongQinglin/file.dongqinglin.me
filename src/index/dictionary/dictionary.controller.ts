import { Observable } from 'rxjs';
import { Dictionary } from 'src/database/entity/dictionary.entity';

import {
  BadRequestException,
  Controller,
  Get,
} from '@nestjs/common';

import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {
  constructor(
    private readonly service: DictionaryService
  ) { }

  @Get('list')
  list(): Observable<Dictionary[]> {
    throw new BadRequestException("参数")
    return this.service.findAll();
  }
}
