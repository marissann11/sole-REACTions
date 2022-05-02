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
