import { isUUID } from 'class-validator';
import { v4 as uuid } from 'uuid';
import { ProductId } from './product-id.vo';

describe('product id value object', () => {
  it('should make sure product id is correct', async () => {
    const productId = ProductId.create();
    const productIdFromString = ProductId.from(uuid());
    expect(
      isUUID(productId.value) && isUUID(productIdFromString.value),
    ).toBeTruthy();
  });
});
