import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import consts from './common/constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from './common/logger';
import { cloudwatchLogger } from './common/config/cloudwatch';

async function bootstrap() {
  const isDevelopment = process.env.NODE_ENV == 'production' ? false : true;

  const app = await NestFactory.create(AppModule, {
    logger: isDevelopment ? console : new Logger(cloudwatchLogger),
  });

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Product Service')
    .setDescription('The product service documentation')
    .setVersion('1.0')
    .addTag('product-service')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 },
  });

  await app.startAllMicroservices();
  await app.listen(consts().port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
