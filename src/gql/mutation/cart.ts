export const addToCartMutation = `
mutation createCart($id: ID!) {
  cartCreate(
    input: {
      lines: [
        {
          quantity: 1
          merchandiseId: $id
        }
      ]
      attributes: { key: "cart_attribute", value: "This is a cart attribute" }
    }
  ) {
    cart {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
      attributes {
        key
        value
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
    }
  }
}`;
