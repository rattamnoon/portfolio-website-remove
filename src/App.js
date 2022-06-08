import React, { memo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import client from './apollo/client';

import Home from './pages/Home';

const Index = memo(() => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="users" element={<Users />}>
            <Route path="/" element={<UsersIndex />} />
            <Route path=":id" element={<UserProfile />} />
            <Route path="me" element={<OwnUserProfile />} />
          </Route> */}
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
});

export default Index;
