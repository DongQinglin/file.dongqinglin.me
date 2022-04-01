import {
  from,
  Observable,
} from 'rxjs';
import { Dictionary } from 'src/database/entity/dictionary.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private readonly repo: Repository<Dictionary>,
  ) { }

  findAll(): Observable<Dictionary[]> {
    return from(this.repo.find());
  }
}
