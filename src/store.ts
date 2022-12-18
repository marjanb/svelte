import { postToShopify } from "$routes/api/utils/postToShopify";
import { error } from "@sveltejs/kit";
import { productsQuery, productQuery } from "$gql/query/products";
import { collectionsQuery, collectionQuery } from "$gql/query/collections";

export const getProducts = async () => {
  const shopifyResponse = await postToShopify({
    query: productsQuery,
  });

  if (!shopifyResponse) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return shopifyResponse.products.edges;
};

export const getProductByHandle = async (handle: string) => {
  const shopifyResponse = await postToShopify({
    query: productQuery,
    variables: {
      handle,
    },
  });

  if (!shopifyResponse) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return shopifyResponse.product;
};

export const getCollections = async () => {
  const shopifyResponse = await postToShopify({
    query: collectionsQuery,
  });
  
  console.log('aaa shopifyResponse', shopifyResponse);

  if (!shopifyResponse) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return shopifyResponse.collections.edges;
};

export const getCollectionByHandle = async (handle: string) => {
  const shopifyResponse = await postToShopify({
    query: collectionQuery,
    variables: {
      handle,
    },
  });

  if (!shopifyResponse) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return shopifyResponse.collectionByHandle;
};
