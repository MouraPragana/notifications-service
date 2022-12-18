import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'seuClientId',
        brokers: ['broker'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'userName',
          password: 'password',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
