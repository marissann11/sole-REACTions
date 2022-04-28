import { gql } from '@apollo/client';

// add color field to shoe query
export const QUERY_ALL_SHOES = gql`
  {
    shoes {
      _id
      name
      description
      price
      brand
    }
  }
`;
// add color field
export const QUERY_SHOE = gql`
  query getShoe($id: ID) {
    shoe(_id: $id) {
      _id
      name
      description
      price
      brand
      image
    }
  }
`;
// add color field to shoes maybe
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        shoes {
          _id
          name
          description
          price
          brand
          image
        }
      }
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query getCheckout($shoes: [ID]!) {
    checkout(shoes: $shoes) {
      session
    }
  }
`;
