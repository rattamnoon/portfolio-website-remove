import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import mainUrl, { wsUrl } from '../config/mainUrl';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${wsUrl}/graphql`,
  }),
);

const httpLink = new HttpLink({
  uri: `${mainUrl}/graphql`,
});

const authLink = setContext(async (request, previousContext) => {
  const { headers } = previousContext;
  // const { AuthReducer } = storeConfig.store.getState();
  // const { token } = AuthReducer;

  return {
    headers: {
      ...headers,
      Authorization: `Bearer F-JaNdRgUkXn2r5u`,
      // Authorization: `Bearer ${process.env.REACT_APP_API_AUTH_TOKEN}`,
      'x-token': 'un',
      'x-refreshToken': 'un',
    },
  };
});

const linkErr = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      const notAuth = graphQLErrors.reduce((pre, cur) => {
        if (
          cur.message === 'Not authenticated' ||
          cur.message === 'Not Authorised!' ||
          cur.message ===
            'Access denied! You need to be authorized to perform this action!' ||
          cur.message.includes('Not authenticated')
        ) {
          return true;
        }

        return pre;
      }, false);

      console.log('notAuth', notAuth);

      graphQLErrors.forEach(({ extensions, message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  },
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  from([linkErr, authLink, httpLink]),
);

export default new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
