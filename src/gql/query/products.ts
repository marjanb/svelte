export const productQuery = `
query product($handle: String!) {
  product(handle: $handle) {
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
    images(first: 10) {
      edges {
        node {
          url
          altText
        }
      }
    }
  }
}
`;

export const productsQuery = `{
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
}`;
