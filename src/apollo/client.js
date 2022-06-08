import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  // Observable,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

export const mainUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.myorigin.net'
    : 'http://localhost:4000';

const httpLink = new HttpLink({
  uri: `${mainUrl}/graphql`,
});
// const apiToken = 's5v8y/B?E(H+KbPeShVmYq3t6w9z$C&F';
const authLink = setContext(async (request, previousContext) => {
  const { headers } = previousContext;
  // const { AuthReducer } = storeConfig.store.getState();
  // const { token } = AuthReducer;

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.REACT_APP_API_AUTH_TOKEN}`,
      // 'x-token':
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyYXR0YW1ub29uLmsiLCJlbWFpbCI6InJhdHRhbW5vb24ua2lyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDY1ODYwNiwiZXhwIjoxNjU5ODQyNjA2fQ.wZXTeH8uoKw6ggvufvOQnVEQkGjn38FguS-JP5Esarc',
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

export default new ApolloClient({
  link: from([linkErr, authLink, httpLink]),
  cache: new InMemoryCache(),
});
