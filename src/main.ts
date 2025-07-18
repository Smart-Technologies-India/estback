import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //global validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(5582);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
