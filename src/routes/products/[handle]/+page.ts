import type { PageLoad } from './$types';
import { getProductByHandle } from '$src/store';

export const load: PageLoad = async ({ params }) => {
  const product = await getProductByHandle(params.handle);
  console.log('aaa product', product);

  return {
    product,
  };
};
