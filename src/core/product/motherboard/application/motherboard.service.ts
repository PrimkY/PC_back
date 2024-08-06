import { Injectable } from '@nestjs/common';
import { Motherboard } from '../domain/trash';
import { MotherboardRepository } from './motherboard.repository';
import { MotherBoardUseCase } from '../usecases/motherboard.usecase';

@Injectable()
export class MotherboardService implements MotherBoardUseCase {
  constructor(private readonly motherboardRepository: MotherboardRepository) {}

  getMotherData(): Motherboard[] {
    return this.motherboardRepository.getMotherData();
  }
}
