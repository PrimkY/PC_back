import { Injectable } from '@nestjs/common';
import { Motherboard } from '../domain/trash';
import { MotherBoardOutPort } from '../outports/motherboard.outport';

@Injectable()
export class MotherboardRepository {
  constructor(private readonly motherboardPort: MotherBoardOutPort) {}

  getMotherData(): Motherboard[] {
    return this.motherboardPort.getMotherData();
  }
}
