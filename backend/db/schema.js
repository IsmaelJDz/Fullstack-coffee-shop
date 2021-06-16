const { gql } = require('apollo-server');

const typeDefs = gql`
  #Types
  type Coffees {
    id: ID
    name: String
    price: Int
    ingredients: String
    type: String
    Img: String
    Desc: String
  }

  type User {
    id: ID
    name: String
    lastName: String
    email: String
    createdAt: String
  }

  type Token {
    token: String
  }

  type Users {
    name: String
    age: Int
    email: String
  }

  type Product {
    id: ID
    name: String
    price: Float
    type: String
    createdAt: String
  }

  # General Inputs
  input CoffeesInput {
    coffee: String
  }

  # User Inputs
  input UserInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
  }

  input AuthInput {
    email: String!
    password: String!
  }

  # Products Inputs
  input ProductInput {
    name: String!
    price: Float!
    type: String!
  }

  #Queries
  type Query {
    getCoffee(input: CoffeesInput!): [Coffees]
    getAllCoffees: Product
    getUsers: [Users]
    getUser(token: String!): User
  }

  #Mutations
  type Mutation {
    #Users
    newUser(input: UserInput!): User
    authUser(input: AuthInput!): Token

    #Products
    newProduct(input: ProductInput): Product
  }
`;

module.exports = typeDefs;
