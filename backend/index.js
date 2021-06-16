const { ApolloServer } = require('apollo-server');

const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const connectDB = require('./config/db');

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const myContext = 'hello';

    return {
      myContext,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`URL server ready at: ${url} 🚀 `);
});
