import { Entity } from '@libs/ddd';
import { HDDId } from '@core/product/domain/HDD/scalars/HDD-id.vo';
import { Type } from '@core/product/domain/HDD/scalars/type.vo';
import { Interface } from '@core/product/domain/HDD/scalars/interface.vo';
import { Storage } from '@core/product/domain/HDD/scalars/storage.vo';
import { FormFactor } from '@core/product/domain/HDD/scalars/formFactor.vo';
import { TDP } from '@core/product/domain/HDD/scalars/TDP.vo';
import { Result } from 'neverthrow';
import { ValidationError } from 'class-validator';

export class HDDEntity extends Entity<HDDId> {
  constructor(
    public type: Type,
    public interfaces: Interface,
    public storage: Storage,
    public formFactor: FormFactor,
    public tdp: TDP,
    id: HDDId,
  ) {
    super(id);
  }

  static async create(data: {
    type: string;
    interfaces: string;
    storage: string;
    formFactor: string;
    tdp: string;
  }): Promise<Result<HDDEntity, ValidationError[]>> {
    return Result.combine([
      await Type.from(data.type),
      await Interface.from(data.interfaces),
      await Storage.from(data.storage),
      await FormFactor.from(data.formFactor),
      await TDP.from(data.tdp),
    ]).map(
      ([type, interfaces, storage, formFactor, tdp]) =>
        new HDDEntity(
          type,
          interfaces,
          storage,
          formFactor,
          tdp,
          HDDId.create(),
        ),
    );
  }

  static async restore(data: {
    id: string;
    type: string;
    interfaces: string;
    storage: string;
    formFactor: string;
    tdp: string;
  }) {
    const hddId = await HDDId.from(data.id);
    return Result.combine([
      await Type.from(data.type),
      await Interface.from(data.interfaces),
      await Storage.from(data.storage),
      await FormFactor.from(data.formFactor),
      await TDP.from(data.tdp),
    ]).map(
      ([type, interfaces, storage, formFactor, tdp]) =>
        new HDDEntity(type, interfaces, storage, formFactor, tdp, hddId),
    );
  }
}
