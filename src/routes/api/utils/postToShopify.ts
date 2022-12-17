/** @type {import('./$types').PageLoad} */
import {
  PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
  PUBLIC_SHOPIFY_API_ENDPOINT,
} from '$env/static/public';

interface Variables {
    handle: string;
}

export const postToShopify = async ({ query, variables }: { query: string, variables?: Variables }) => {
  try {
    const result = await fetch(PUBLIC_SHOPIFY_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }).then((res) => res.json());
    if (result.errors) {
      console.log({ errors: result.errors });
    } else if (!result || !result.data) {
      console.log({ result });
      return 'No results found.';
    }
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
