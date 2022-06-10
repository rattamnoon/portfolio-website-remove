import React from 'react';
import { useQuery } from '@apollo/client';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import query from './schema/profile';

import LoadingScreen from '../../components/LoadingScreen';
import PageError from '../../components/PageError';

const App = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <LoadingScreen />;
  if (error) return <PageError error={error.message} />;

  return (
    <React.Fragment>
      {error && error.message}
      <Navbar />
      <Home data={data?.profile} />
      <About />
      <Skills data={data?.skills} />
      <Work data={data?.works} />
      <Contact />
    </React.Fragment>
  );
};

export default App;
