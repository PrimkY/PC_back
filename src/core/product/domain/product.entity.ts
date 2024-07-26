import { Entity } from '@libs/ddd';
import { ProductId } from './scalars/product-id.vo';
import { IProductData } from './types/IProductData';
import { Result } from 'neverthrow';
import { ValidationError } from '@nestjs/common';

export class ProductEntity extends Entity<ProductId> {
  constructor(
    public name: string,
    public category: string,
    public description: string,
    id: ProductId,
  ) {
    super(id);
  }

  static async create(
    data: IProductData,
  ): Promise<Result<ProductEntity, ValidationError[]>> {
    return Result.combine([
      await data.name,
      await data.category,
      await data.description,
    ]).map(
      ([name, category, phone]) =>
        new ProductEntity(name, category, phone, ProductId.create()),
    );
  }

  static async restore(
    data: IProductData,
    id: ProductId,
  ): Promise<Result<ProductEntity, ValidationError[]>> {
    return new ProductEntity(data.name, data.category, data.description, id);
  }
}
