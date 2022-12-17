import { postToShopify } from "$src/routes/api/utils/postToShopify";


export const getProducts = async () => {
    try {
        const shopifyResponse = await postToShopify({
            query: `{
              products(first: 10) {
                edges {
                  node {
                    id
                    handle
                    title
                    description
                    images(first: 1) {
                      edges {
                        node {
                          url(transform: {maxHeight: 200, maxWidth: 200, crop: CENTER})
                          altText
                        }
                      }
                    }
                     priceRange {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    variants(first: 1) {
                      edges {
                        node {
                          priceV2 {
                            amount
                          }
                        }
                      }
                    } 
                  }
                }
              }
            }`,
        });

        return shopifyResponse.products.edges;
    } catch (error) {
        console.log(error);
    }
};

export const getProductByHandle = async (handle: string) => {
    try {
        const shopifyResponse = await postToShopify({
            query: `
                query getProduct($handle: String!) {
                  productByHandle(handle: $handle) {
                    id
                    handle
                    description
                    title
                    totalInventory
                    variants(first: 5) {
                      edges {
                        node {
                          id
                          title
                          quantityAvailable
                          priceV2 {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                    priceRange {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              `,
            variables: {
                handle,
            },
        });
        console.log('aaa shopifyResponse', shopifyResponse.productByHandle);

        return shopifyResponse.productByHandle;
    } catch (error) {
        console.log(error);
    }
};
