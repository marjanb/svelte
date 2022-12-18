import type { PageLoad } from './$types';
import { getCollections } from '$src/store';
import { error } from "@sveltejs/kit";

export const load: PageLoad = async () => {
  const collections = await getCollections();
  console.log('aaa collections', collections);

  if (!collections) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return {
    collections,
  };
};
