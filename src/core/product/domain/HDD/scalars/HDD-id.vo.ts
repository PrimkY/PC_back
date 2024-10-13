import { ValueObject } from '@libs/ddd';
import { v4 as uuid } from 'uuid';

export class HDDId extends ValueObject {
  private constructor(public readonly value: string) {
    super();
  }

  static create(): HDDId {
    return new HDDId(uuid());
  }

  static from(value: string): HDDId {
    return new HDDId(value);
  }
}
