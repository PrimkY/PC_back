import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getPort(): string {
    return this.configService.getOrThrow<string>('PORT');
  }
  getFrontPort(): string {
    return this.configService.getOrThrow<string>('FRONT_PORT');
  }

  getApolloURL(): string {
    return this.configService.getOrThrow<string>('APOLLO_URL')
  }
}
