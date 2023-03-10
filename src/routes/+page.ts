import type { PageLoad } from './$types';
import { getProducts } from '$src/store';
import { error } from "@sveltejs/kit";

export const load: PageLoad = async () => {
  const products = await getProducts();

  if (!products) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return {
    products,
  };
};
