import { DomainObject } from '@libs/ddd/domain-object';

export abstract class IdentifiableDomainObject<T> extends DomainObject {
  constructor(readonly id: T) {
    super();
  }
}
