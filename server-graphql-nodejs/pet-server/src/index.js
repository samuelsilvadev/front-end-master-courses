const { ApolloServer } = require('apollo-server');

const schema = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.listen(4000).then(() => console.log('server is listening on port 4000'));
