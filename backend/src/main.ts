import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  const app = await NestFactory.create(AppModule);

  //A middle layer, validate input data, all request will have to go through this
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Allow only defined field, filter others
      transform: true, //Help transform type of request into the type in DTO (exp send GET /user?id=1, default id is string, but in DTO id is defined as number, so convert into number)
    }),
  );

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
