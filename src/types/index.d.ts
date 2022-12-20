export interface Product {
  node: {
    handle: string;
    title: string;
    images: {
      edges: [
        {
          node: {
            url: string;
            alt: string;
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: {
        amount: string;
      },
      maxVariantPrice: {
        amount: string;
      },
    }
  }
}
