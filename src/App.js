import React, { memo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from './apollo/client';
import { gql, useQuery } from '@apollo/client';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import LoadingScreen from './components/LoadingScreen';

const query = gql`
  query getDataQuery {
    getData
  }
`;

const App = memo(() => {
  const { data, loading, error } = useQuery(query);

  if (loading) return <LoadingScreen />;

  console.log(process.env);

  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </React.Fragment>
  );
});

const Main = () => {
  const apolloClient = useApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  );
};

export default Main;
