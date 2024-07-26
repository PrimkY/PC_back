import { Module } from '@nestjs/common';
import { ProductModule } from '@core/product/product.module';

@Module({
  imports: [ProductModule],
  exports: [ProductModule],
})
export class CoreModule {}
