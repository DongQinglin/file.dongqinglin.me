import * as os from 'os';
import * as path from 'path';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import {
  directories,
  port,
  swaggerconfig,
} from './main.const';
import { reqresLogger } from './pipe/logger.middleware';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  SwaggerModule.setup('/api', app, SwaggerModule.createDocument(app, swaggerconfig));
  app.use(reqresLogger);


  directories.forEach(dir => {
    console.log("mnt: " + path.join(os.homedir(), dir));
    app.useStaticAssets(path.join(os.homedir(), dir),
      { prefix: `/${dir}/` }
    )
  })
  await app.listen(port);
}

bootstrap();
