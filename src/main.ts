import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  // Enable URI versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(process.env.PORT || 4000);
}

bootstrap();
