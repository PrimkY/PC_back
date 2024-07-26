import { ValueObject } from '@libs/ddd';
import { ValidationError } from '@nestjs/common';
import { validate } from 'class-validator';
import { ok, err, Result } from 'neverthrow';

export class Name extends ValueObject {
  public readonly value: string;

  private constructor(value: string) {
    super();
    this.value = value;
  }

  static async from(value: string): Promise<Result<Name, ValidationError[]>> {
    const instance = new Name(value);
    const validationErrors = await validate(instance);
    return validationErrors.length === 0 ? ok(instance) : err(validationErrors);
  }
}
