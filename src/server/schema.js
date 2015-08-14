import { getBooks, getUser } from './data.js';

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

import {
  nodeDefinitions,
} from 'graphql-relay';

var {nodeField} = nodeDefinitions(
  (obj) => {
    return UserType;
  }
);

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user object',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'The id of the user.'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the user.'
    }
  })
});

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: UserType,
      resolve: () => getUser(),
    },
  }),
});

export const Schema = new GraphQLSchema({
  query: queryType
});