import type { PageLoad } from './$types';
import { getProducts } from '$src/store';

export const load: PageLoad = async () => {
  const products = await getProducts();
  console.log('aaa products', products);

  return {
    products,
  };
};
