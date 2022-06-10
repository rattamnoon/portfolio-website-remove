import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Loadable from 'react-loadable';

import LoadingScreen from '../components/LoadingScreen';

const history = createHistory();

const AsyncHome = Loadable({
  loader: () => import('../pages/Home'),
  loading: () => <LoadingScreen />,
  delay: 5000,
});

const AsyncLogin = Loadable({
  loader: () => import('../pages/Login'),
  loading: () => <LoadingScreen />,
  delay: 5000,
});

const Async404 = Loadable({
  loader: () => import('../components/Page404'),
  loading: () => <LoadingScreen />,
  delay: 5000,
});

const routes = [
  { path: '/', exact: true, element: <AsyncHome /> },
  { path: '/login', exact: true, element: <AsyncLogin /> },
];

const App = ({ childProps }) => {
  return (
    <Router>
      <Routes history={history}>
        <Route path="*" element={<Async404 />} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
