export const collectionQuery = `
query collectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    id
    handle
    title
    description
    image {
      url
    }
     products(first: 10) {
      edges {
        node {
          id
          handle
          title
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
        }
      }
    }
  }
}`;

export const collectionsQuery = `{
  collections(first: 25) {
    edges {
      node {
        id
        handle
        title
        description
      }
    }
  }
}`;
