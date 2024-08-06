import { Query, Resolver } from '@nestjs/graphql';
import { Motherboard } from '@adapters/web/product/motherboard/object-types/motherboard.object-type';
import { MotherBoardUseCase } from '@core/product/motherboard/usecases/motherboard.usecase';

@Resolver()
export class GetAllMotherboardsResolver {
  constructor(private readonly motherBoardUseCase: MotherBoardUseCase) {}

  @Query(() => [Motherboard])
  async getAll(): Promise<Motherboard[]> {
    const result = this.motherBoardUseCase.getMotherData();
    return result.map((motherboard) => {
      return {
        id: motherboard.id,
        name: motherboard.name,
        chipset: motherboard.chipset,
        formFactor: motherboard.formFactor,
        socket: motherboard.socket,
        memorySlots: motherboard.memorySlots,
        maxMemory: motherboard.maxMemory,
      };
    });
  }
}
