import { Module } from '@nestjs/common';
import { AdaptersModule } from '@adapters/adapters.module';
import { CoreModule } from '@core/core.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';

@Module({
  imports: [AdaptersModule, CoreModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  })],
  providers: [AppService]
})
export class AppModule {}
