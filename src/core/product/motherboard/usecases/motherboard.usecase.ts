import { Motherboard } from '@core/product/motherboard/domain/trash';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class MotherBoardUseCase {
  abstract getMotherData(): Motherboard[];
}
