import { Module } from '@nestjs/common';
import { MotherboardRepository } from './application/motherboard.repository';
import { MotherboardService } from './application/motherboard.service';
import { MotherBoardUseCase } from './usecases/motherboard.usecase';

@Module({
  imports: [],
  providers: [
    MotherboardRepository,
    MotherboardService,
    {
      provide: MotherBoardUseCase,
      useClass: MotherboardService,
    },
  ],
  exports: [MotherBoardUseCase],
})
export class MotherboardModule {}
