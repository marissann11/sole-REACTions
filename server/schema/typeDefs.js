const { gql } = require('apollo-server-express');

// add colors back into shoe and shoe input
const typeDefs = gql`
  type Shoe {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
    brand: String
  }

  input ShoeInput {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    brand: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    shoes: [Shoe]
  }

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    savedShoes: [Shoe]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    order(_id: ID!): Order
    checkout(shoes: [ID]!): Checkout
    shoes(brand: String, price: Int): [Shoe]
    shoe(_id: ID!): Shoe
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(shoes: [ID]!): Order
    saveShoe(shoeData: ShoeInput): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
