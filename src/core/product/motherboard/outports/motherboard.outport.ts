import { Motherboard } from '@core/product/motherboard/domain/trash';

export abstract class MotherBoardOutPort {
  abstract getMotherData(): Motherboard[];
}
