import { ValueObject } from '@libs/ddd';
import { v4 as uuid } from 'uuid';

export class ProductId extends ValueObject {
  private constructor(public readonly value: string) {
    super();
  }

  static create(): ProductId {
    return new ProductId(uuid());
  }

  static from(value: string): ProductId {
    return new ProductId(value);
  }
}
