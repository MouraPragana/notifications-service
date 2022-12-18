import { KafaConsumerService } from '@infra/messaging/kafka/kafta-consumer.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsumserService = app.get(KafaConsumerService);
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumserService,
  });

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
