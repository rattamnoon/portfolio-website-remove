import React, { memo } from 'react';
import { gql, ApolloProvider, useQuery } from '@apollo/client';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import LoadingScreen from './components/LoadingScreen';

import client from './apollo/client';

const query = gql`
  query {
    skills {
      label
      img
    }
    works {
      label
      img
    }
  }
`;

const App = memo(() => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <LoadingScreen />;

  console.log(data);

  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills data={data.skills} />
      <Work data={data.skills} />
      <Contact />
      {error && error.message}
    </React.Fragment>
  );
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default Index;
