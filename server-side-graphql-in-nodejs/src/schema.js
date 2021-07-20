const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: String
        username: String
    }

    type Pet {
        id: ID
        createdAt: Int
        name: String
        type: String
    }

    type Query {
        user: User!
        allPets: [Pet]!
    }
`;

module.exports = typeDefs
