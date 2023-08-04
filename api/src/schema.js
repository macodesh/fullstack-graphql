const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  enum AnimalType {
    CAT
    DOG
  }

  interface Animal {
    id: ID!
    name: String!
    type: AnimalType!
    createdAt: String!
    img: String
  }

  type Pet implements Animal {
    id: ID!
    createdAt: String!
    name: String!
    type: AnimalType!
    img: String
    tutor: User!
  }

  input PetInput {
    id: ID
    createdAt: String
    name: String
    type: AnimalType
    img: String
    tutor: ID
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput!): Pet!
  }

  input NewPetInput {
    name: String!
    type: AnimalType!
    img: String
    tutor: ID!
  }

  type Mutation {
    newPet(input: NewPetInput!): Pet!
  }
`;

module.exports = typeDefs;
