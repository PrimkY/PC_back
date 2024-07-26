import { Module } from '@nestjs/common';
import { AdaptersModule } from '@core/adapters.module';
import { CoreModule } from '@adapters/core.module';

@Module({
  imports: [AdaptersModule, CoreModule],
})
export class AppModule {}
