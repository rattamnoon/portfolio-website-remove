import React, { memo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import client from './apollo/client';
import store from './redux/store';
import Routes from './routes';

const Index = memo(() => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
});

export default Index;
