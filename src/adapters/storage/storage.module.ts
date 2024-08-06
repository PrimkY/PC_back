import { Module } from '@nestjs/common';
import { MotherBoardOutPort } from '@core/product/motherboard/outports/motherboard.outport';
import { MockStorage } from './mock.service';

@Module({
  providers: [
    {
      provide: MotherBoardOutPort,
      useClass: MockStorage,
    },
  ],
  exports: [MotherBoardOutPort],
})
export class StorageModule {}
