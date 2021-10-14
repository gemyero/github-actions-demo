const { ApolloServer, gql } = require('apollo-server');
const cuid = require('cuid');

const typeDefs = gql`
  type Query {
    me: User!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
  }
`;

const resolvers = {
  Query: {
    me() {
      return { id: cuid(), name: 'Mohamed Gamal', age: 30 };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = { server };
