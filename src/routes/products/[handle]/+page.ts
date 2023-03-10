import type { PageLoad } from './$types';
import { getProductByHandle } from '$src/store';
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const product = await getProductByHandle(params.handle);

  if (!product) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return {
    product,
  };
};
