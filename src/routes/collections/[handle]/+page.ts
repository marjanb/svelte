import type { PageLoad } from './$types';
import { getCollectionByHandle } from '$src/store';
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const collection = await getCollectionByHandle(params.handle);
  console.log('aaa collection', collection);

  if (!collection) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return {
    collection,
  };
};
