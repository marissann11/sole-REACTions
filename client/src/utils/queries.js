import { gql } from '@apollo/client';

// add SKU and collab queries

export const QUERY_ALL_SHOES = gql`
  {
    shoes {
      _id
      name
      description
      price
      brand
      color
      model
    }
  }
`;
export const QUERY_SHOE = gql`
  query getShoe($id: ID) {
    shoe(_id: $id) {
      _id
      name
      description
      price
      brand
      image
      color
      model
    }
  }
`;
export const QUERY_ORDERS = gql`
  {
    orders {
      _id
      purchaseDate
      shoes {
        _id
        price
        brand
      }
    }
  }
`;
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
          color
          model
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
