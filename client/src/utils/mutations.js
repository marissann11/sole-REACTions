import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// only admin can use this mutation or err is thrown
export const ADD_SHOE = gql`
  mutation addShoe(
    $name: String!
    $description: String!
    $image: String!
    $price: Int
    $brand: String!
    $year: String!
    $sku: String!
  ) {
    addShoe(
      name: $name
      description: $description
      image: $image
      price: $price
      brand: $brand
      year: $year
      sku: $sku
    ) {
      name
    }
  }
`;

// when checkout is called, this mutation is called to track sales data
export const ADD_SALE = gql`
  mutation addSale($shoes: [ID]!) {
    addSale(shoes: $shoes) {
      shoes {
        _id
        name
        price
        brand
      }
    }
  }
`;
