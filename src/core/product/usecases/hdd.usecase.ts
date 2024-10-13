import { Injectable } from '@nestjs/common';
import { Result } from 'neverthrow';
import { HDDEntity } from '@core/product/domain/HDD/HDD.entity';
import { ValidationError } from 'class-validator';

@Injectable()
export abstract class HddUseCase {
  abstract getProducts(): Promise<Result<HDDEntity[], ValidationError[]>>;
}
