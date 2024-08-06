import { Module } from '@nestjs/common';
import { MotherboardModule } from '@core/product/motherboard/motherboard.module';

@Module({
  imports: [MotherboardModule],
  providers: [],
  exports: [MotherboardModule],
})
export class ProductModule {}
