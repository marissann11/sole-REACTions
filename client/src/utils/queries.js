import { gql } from '@apollo/client';

export const QUERY_ALL_SHOES = gql`
  {
    shoes {
      _id
      name
      year
      description
      price
      brand
      color
      image
      model
      sku
      collab
      sport
    }
  }
`;
export const QUERY_SHOE = gql`
  query getShoe($sku: sku) {
    shoe(sku: $sku) {
      _id
      name
      year
      description
      price
      brand
      image
      color
      model
      sku
      collab
      sport
    }
  }
`;
export const QUERY_ALL_USERS = gql`
  {
    users {
      orders {
        purchaseDate
        shoes {
          price
          brand
        }
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
          sku
          collab
          sport
        }
      }
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query getCheckout($shoes: [sku]!) {
    checkout(shoes: $shoes) {
      session
    }
  }
`;
export const QUERY_ALL_ADMINSALES = gql`
  {
    adminSales {
      _id
      shoes {
        _id
        name
        price
        brand
        sport
      }
    }
  }
`;
