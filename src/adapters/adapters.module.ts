import { Global, Module } from '@nestjs/common';
import { WebModule } from './web/web.module';
import { StorageModule } from './storage/storage.module';

@Global()
@Module({
  imports: [WebModule, StorageModule],
  exports: [WebModule, StorageModule],
})
export class AdaptersModule {}
