import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Motherboard {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  chipset: string;

  @Field(() => String)
  formFactor: string;

  @Field(() => String)
  socket: string;

  @Field(() => Number)
  memorySlots: number;

  @Field(() => Number)
  maxMemory: number;
}
