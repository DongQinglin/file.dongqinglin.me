import { Response } from 'express';
import * as os from 'os';
import * as path from 'path';

import {
  Controller,
  Get,
  Res,
} from '@nestjs/common';

import { directories } from '../../main.const';

@Controller()
export class IndexController {

  @Get()
  index(@Res() res: Response) {
    res.sendFile(path.join(os.homedir(), directories[0], "index.html"))
  }
}
