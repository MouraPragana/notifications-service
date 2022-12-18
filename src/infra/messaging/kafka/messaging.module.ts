import { SendNotification } from '@application/use-cases/send-notification';
import { DataBaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { KafaConsumerService } from './kafta-consumer.service';

@Module({
  imports: [DataBaseModule],
  providers: [SendNotification, KafaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}
