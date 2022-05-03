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
    isAdmin: Boolean
    isSubscribed: Boolean
  }

  type AdminSale {
    _id: ID
    purchaseDate: String
    shoes: [Shoe]
  }

  type Checkout {
    session: String
  }

  type Subscription {
    itemId: String
    priceId: String
    session: ID
    customer: String
  }

  type SubPortal {
    session: String
  }

  type Auth {
    token: ID
    user: User
  }

  input Filters {
    brand: String
    color: String
    collab: String
    model: String
    sku: String
    sport: String
  }

  input SortBy {
    price: String
    year: String
  }

  type Query {
    users: [User]
    user: User
    order(_id: ID!): Order
    checkout(shoes: [ID]!): Checkout
    shoes(filters: Filters, sortBy: SortBy): [Shoe]
    shoe(_id: ID!, sku: String): Shoe
    adminSales: [AdminSale]
    subscription: Subscription
    subPortal: SubPortal
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(shoes: [ID]!): Order
    login(email: String!, password: String!): Auth
    addShoe(
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
    ): Shoe
    removeShoe(_id: [ID]!): Shoe
    subscribeUser(_id: [ID]!): User
    addSale(shoes: [ID]!): AdminSale
  }
`;

module.exports = typeDefs;
