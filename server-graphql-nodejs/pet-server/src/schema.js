const { gql } = require('apollo-server');

const schema = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  type Query {
    user: User
    pets: [Pet]!
    pet: Pet
  }
`;

module.exports = schema;
