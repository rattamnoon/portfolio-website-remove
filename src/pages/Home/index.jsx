import React from 'react';
import { useQuery } from '@apollo/client';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import query from './schema/profile';

import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <LoadingScreen />;

  return (
    <React.Fragment>
      <Navbar />
      <Home data={data?.profile} />
      <About />
      <Skills data={data?.skills} />
      <Work data={data?.works} />
      <Contact />
      {error && error.message}
    </React.Fragment>
  );
};

export default App;
