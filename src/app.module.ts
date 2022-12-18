import { MessagingModule } from '@infra/messaging/kafka/messaging.module';
import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DataBaseModule, MessagingModule],
})
export class AppModule {}
