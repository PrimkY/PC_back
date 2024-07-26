import { Module } from '@nestjs/common';
import { AdaptersModule } from '@adapters/adapters.module';
import { CoreModule } from '@core/core.module';

@Module({
  imports: [AdaptersModule, CoreModule],
})
export class AppModule {}
