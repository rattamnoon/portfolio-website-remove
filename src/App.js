import React, { memo } from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './apollo/client';

import Routes from './routes';

const Index = memo(() => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
});

export default Index;
