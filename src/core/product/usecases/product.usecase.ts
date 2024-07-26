import { Injectable } from '@nestjs/common';
import { Result } from 'neverthrow';
import { ProductEntity } from '../domain/product.entity';
import { ValidationError } from 'class-validator';

@Injectable()
export abstract class ProductUseCase {
  abstract getProducts(
    data: string,
  ): Promise<Result<ProductEntity, ValidationError[]>>;
}
