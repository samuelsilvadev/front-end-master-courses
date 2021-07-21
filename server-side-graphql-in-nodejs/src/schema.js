const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: ID
        username: String
        shoe: Shoe!
    }

    type Pet {
        id: ID
        createdAt: Int
        name: String
        type: String
    }

    union Footwear = Sneaker | Boots

    interface Shoe {
        brand: String!
    }

    type Sneaker implements Shoe {
        brand: String!
        color: String!
    }

    type Boots implements Shoe {
        brand: String!
        size: Int!
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

    input NewPetInput {
        name: String!
        type: String!
    }

    input UpdatePetInput {
        id: ID!
        name: String
        type: String
    }

    type Query {
        user(input: UserInput): User!
        allUsers(input: UserInput): [User]!
        pet(input: PetInput): Pet 
        allPets(input: PetInput): [Pet]!
        allShoes: [Footwear]!
    }

    type Mutation {
        newUser(input: NewUserInput!): User!
        newPet(input: NewPetInput!): Pet!
        updatePet(input: UpdatePetInput): Pet!
        deletePet(id: ID): ID!
    }
`;

module.exports = typeDefs
