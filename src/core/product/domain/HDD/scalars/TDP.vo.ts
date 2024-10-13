import { ValueObject } from '@libs/ddd';
import { ValidationError } from '@nestjs/common';
import { validate } from 'class-validator';
import { ok, err, Result } from 'neverthrow';

export class TDP extends ValueObject {
  public readonly value: string;

  private constructor(value: string) {
    super();
    this.value = value;
  }

  static async from(value: string): Promise<Result<TDP, ValidationError[]>> {
    const instance = new TDP(value);
    const validationErrors = await validate(instance);
    return validationErrors.length === 0 ? ok(instance) : err(validationErrors);
  }
}
