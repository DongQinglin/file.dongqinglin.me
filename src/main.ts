import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import {
  port,
  swaggerconfig,
} from './main.const';
import { reqresLogger } from './pipe/logger.middleware';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('/api', app, SwaggerModule.createDocument(app, swaggerconfig));
  app.use(reqresLogger);

  await app.listen(port);
}

bootstrap();
