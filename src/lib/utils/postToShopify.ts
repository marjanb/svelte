import {
  PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
  PUBLIC_SHOPIFY_API_ENDPOINT,
} from '$env/static/public';
import { error } from '@sveltejs/kit';

interface Variables {
  handle?: string;
  id?: string;
}

export const postToShopify = async (
  { query, variables }: { query: string, variables?: Variables }
) => {

  const result = await fetch(PUBLIC_SHOPIFY_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());

  if (!result) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return result.data;
};
