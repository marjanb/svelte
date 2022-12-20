import type { PageLoad } from './$types';
import { getCart } from '$src/store';
import { error } from "@sveltejs/kit";

export const load: PageLoad = async () => {
  const cart = await getCart();
  console.log('aaa cart', cart);

  if (!cart) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return {
    cart,
  };
};
