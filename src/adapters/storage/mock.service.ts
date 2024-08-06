import { Injectable } from '@nestjs/common';
import { motherboards } from './mock';
import { MotherBoardOutPort } from '@core/product/motherboard/outports/motherboard.outport';

@Injectable()
export class MockStorage implements MotherBoardOutPort {
  getMotherData() {
    return motherboards;
  }
}
