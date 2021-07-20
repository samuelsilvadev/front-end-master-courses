const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: ID
        username: String
    }

    type Pet {
        id: ID
        createdAt: Int
        name: String
        type: String
    }

    input UserInput {
        id: ID
        username: String
    }

    input PetInput {
        name: String
        type: String
    }

    input NewUserInput {
        username: String!
    }

    type Query {
        user(input: UserInput): User!
        allUsers(input: UserInput): [User]!
        pet(input: PetInput): Pet 
        allPets(input: PetInput): [Pet]!
    }

    type Mutation {
        newUser(input: NewUserInput!): User!
    }
`;

module.exports = typeDefs
