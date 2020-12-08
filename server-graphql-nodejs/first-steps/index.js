const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

const typeDefs = gql`
  type User {
    email: String!
    name: String
    age: Int
    friends: [User]!
  }

  type Query {
    me: User!
    friends: [User]!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: 'samuel@gmail.com',
        name: 'Samuel',
        age: 24,
        friends: [],
      };
    },
    friends() {
      return [
        {
          email: 'samuel@gmail.com',
          name: 'Samuel',
          age: 24,
          friends: [],
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(() => console.log('server is listening on port 4000'));
