const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shoe {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
    brand: String
    year: String
    color: String
    model: String
    sku: String
    collab: String
    sport: String
  }

  input ShoeInput {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    brand: String
    color: String
    model: String
    sku: String
    collab: String
    sport: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    shoes: [Shoe]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    savedShoes: [Shoe]
    adminOrders: [AdminSale]
  }

  type AdminSale {
    _id: ID
    purchaseDate: String
    shoes: [Shoe]
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
    user: User
    order(_id: ID!): Order
    checkout(shoes: [ID]!): Checkout
    shoesPriceASC(brand: String, color: String, model: String, sku: String, collab: String, sport: String): [Shoe]
    shoesPriceDSC(brand: String, color: String, model: String, sku: String, collab: String, sport: String): [Shoe]
    shoesYearASC(brand: String, color: String, model: String, sku: String, collab: String, sport: String): [Shoe]
    shoesYearDSC(brand: String, color: String, model: String, sku: String, collab: String, sport: String): [Shoe]
    shoe(_id: ID!, sku: String): Shoe
    adminSales: [AdminSale]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(shoes: [ID]!): Order
    saveShoe(
      brand: String
      price: Int
      color: String
      model: String
      sku: String
      collab: String
      sport: String
    ): User
    login(email: String!, password: String!): Auth
    addAdminSale(shoes: [ID]!): AdminSale
  }
`;

module.exports = typeDefs;
