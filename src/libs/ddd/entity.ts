import { IdentifiableDomainObject } from '@libs/ddd/identifiable-domain-object';

export abstract class Entity<T> extends IdentifiableDomainObject<T> {}

export type AggregateID = string;
