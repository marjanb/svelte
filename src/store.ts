import { postToShopify } from "$lib/utils/postToShopify";
import { error } from "@sveltejs/kit";
import { productsQuery, productQuery } from "$gql/query/products";
import { collectionsQuery, collectionQuery } from "$gql/query/collections";
import { getCartQuery } from "$gql/query/cart";
import { addToCartMutation } from "./gql/mutation/cart";
import type { Product } from "$types";

export const getProducts = async (): Promise<Product[]> => {
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

export const getProductByHandle = async (handle: string): Promise<Product> => {
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

export const getCollections = async (): Promise<void> => {
  const shopifyResponse = await postToShopify({
    query: collectionsQuery,
  });

  if (!shopifyResponse) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return shopifyResponse.collections.edges;
};

export const getCollectionByHandle = async (handle: string): Promise<void> => {
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

export const getCart = async (): Promise<void> => {
  const shopifyResponse = await postToShopify({
    query: getCartQuery,
  });

  if (!shopifyResponse) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return shopifyResponse.cart;
};

export const addToCart = async (id: string): Promise<void> => {
  const shopifyResponse = await postToShopify({
    query: addToCartMutation,
    variables: {
      id,
    },
  });

  if (!shopifyResponse) {
    throw error(404, {
      message: 'Something went wrong',
    });
  }

  return shopifyResponse.cartCreate.cart;
};
